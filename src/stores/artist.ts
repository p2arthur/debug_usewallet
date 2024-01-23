import {
	dartClient,
	GetArtistSettingsDocument,
	UpdateArtistSettingsDocument,
	UserAritstInfo,
	GetArtistDetailsDocument,
	GetFeaturedArtistsDocument,
	SearchArtistDocument,
	ArtistDetails,
	FeaturedSection,
	GetTwitterVerificationLinkDocument,
} from "@/graphql/client"
import { fileroom as Fileroom } from "@/functions/fileroom/client"

const nestedStores = {
	messageStore: useMessageStore,
	accountStore: useAccountStore,
}

export const useArtistStore = defineStore("artist", {
	state: () => {
		return useNestedStores(nestedStores, {
			currentSettings: {} as UserAritstInfo,
			newSettings: {} as UserAritstInfo,
			artist: null as null | ArtistDetails,
			featuredSections: [] as Array<FeaturedSection>,
			searchTerm: "",
			searchResults: [] as Array<UserAritstInfo>,
			profileUpload: {
				loading: false,
				progress: 0,
				message: "Uploading media",
			},
			bannerUpload: {
				loading: false,
				progress: 0,
				message: "Uploading media",
			},
		})
	},

	async hydrate(state) {
		useHydrateNestedStores(nestedStores, state)
	},

	actions: {
		async getFeaturedArtists() {
			const excludeIds = this.featuredSections.map(
				(section) => section.id
			)

			const { data, error } = await dartClient
				.query(GetFeaturedArtistsDocument, {
					skip: excludeIds,
					limit: 100,
				})
				.toPromise()

			if (error) {
				return this.messageStore.pushSnackError(
					error.graphQLErrors[0].message || error.message
				)
			}

			if (data && data.getFeaturedArtists) {
				this.featuredSections.push(...data.getFeaturedArtists)
			}
		},

		async getAristDetails(id: string, refresh?: boolean) {
			if (
				refresh ||
				(id !== this.artist?.walletAddress &&
					id !== this.artist?.artist.name &&
					id !== this.artist?.artist.normalizedName)
			) {
				this.artist = null

				const { data, error } = await dartClient
					.query(GetArtistDetailsDocument, { id })
					.toPromise()

				if (error) {
					return this.messageStore.pushSnackError(
						error.graphQLErrors[0].message || error.message
					)
				}

				if (data && data.getArtistDetails) {
					this.artist = data.getArtistDetails
				}
			}
		},

		async getArtistSettings() {
			const { data } = await dartClient
				.query(GetArtistSettingsDocument, {})
				.toPromise()

			if (!data) {
				return
			} else {
				this.setSettigns(data.getArtistSettings)
			}
		},

		async updateArtistSettings(settings: Partial<UserAritstInfo>) {
			const currentSettings = {
				name: this.currentSettings.name,
				page: this.currentSettings.page,
				location: this.currentSettings.location,
			}

			const newSettings = {
				...currentSettings,
				...settings,
			}

			const { data, error } = await dartClient
				.mutation(UpdateArtistSettingsDocument, {
					settings: newSettings,
				})
				.toPromise()

			if (!data && error) {
				return this.messageStore.pushSnackError(
					error.graphQLErrors[0].message || error.message
				)
			} else if (data) {
				this.setSettigns(data.updateArtistSettings)
				return this.messageStore.pushSnackSucces(
					"Your artist's settings where successfully updated."
				)
			}
		},

		setSettigns(settings: UserAritstInfo) {
			this.currentSettings = JSON.parse(JSON.stringify(settings))
			this.newSettings = JSON.parse(
				JSON.stringify({
					...settings,
					...this.newSettings,
				})
			)

			if (
				this.accountStore.userInfo &&
				this.accountStore.userInfo.user.artist
			) {
				this.accountStore.userInfo.user.artist.page = settings.page

				if (this.accountStore.loggedInUsers.length >= 0) {
					const index =
						this.accountStore.loggedInUsers.findIndex(
							(u) =>
								u.user.walletAddress ===
								this.accountStore.userInfo?.user
									.walletAddress
						)

					if (
						index >= 0 &&
						this.accountStore.loggedInUsers[index].user.artist
					) {
						//@ts-ignore
						this.accountStore.loggedInUsers[
							index
						].user.artist.page = settings.page
					}
				}

				this.accountStore.updateUserCookie()
			}
		},

		async uploadProfilePicture(file: File) {
			this.profileUpload.loading = true

			const fileroomClient = new Fileroom.Client({
				env: Fileroom.env,
				accessToken: Fileroom.getAuthToken(),
			})
			let upload = await fileroomClient.files.uploadFiles(file, {
				resize: ["512x512", "256x256", "128x128"],
				resizeOptions: {
					fit: "inside",
				},
			})

			upload?.on("progress", (data) => {
				this.profileUpload.progress = data.overallProgress
				this.profileUpload.message = "Processing"
			})

			upload?.on("completed", async (data) => {
				const file = data.hasOwnProperty("file") ? data.file : data

				this.newSettings.page.profileImage = {
					fileroomId: file._id,
					cid: file.original.cid,
					mimeType: file.original.mimetype,
					previews: file.previews.map((preview: any) => {
						return {
							cid: preview.cid,
							mimeType: preview.mimetype,
							size: preview.height,
						}
					}),
				}

				this.profileUpload = {
					loading: false,
					progress: 0,
					message: "Uploading media",
				}

				this.messageStore.pushSnackSucces(
					"Your profile picture was succesfully uploaded."
				)

				await this.updateArtistSettings({
					page: {
						...this.currentSettings.page,
						profileImage: this.newSettings.page.profileImage,
					},
				})
			})

			upload?.on("error", (err) => {
				console.error(err)
				this.profileUpload.loading = false
				this.messageStore.pushSnackError(err.message)
			})
		},

		async uploadBannerPicture(file: File) {
			this.bannerUpload.loading = true

			const fileroomClient = new Fileroom.Client({
				env: Fileroom.env,
				accessToken: Fileroom.getAuthToken(),
			})

			let upload = await fileroomClient.files.uploadFiles(file, {
				resize: ["3840x384", "1920x192", "960x96"],
				resizeOptions: {
					fit: "cover",
				},
			})

			upload?.on("progress", (data) => {
				this.bannerUpload.progress = data.overallProgress
				this.bannerUpload.message = "Processing"
			})

			upload?.on("completed", async (data) => {
				const file = data.hasOwnProperty("file") ? data.file : data

				this.newSettings.page.bannerImage = {
					fileroomId: file._id,
					cid: file.original.cid,
					mimeType: file.original.mimetype,
					previews: file.previews.map((preview: any) => {
						return {
							cid: preview.cid,
							mimeType: preview.mimetype,
							size: preview.height,
						}
					}),
				}

				this.bannerUpload = {
					loading: false,
					progress: 0,
					message: "Uploading media",
				}

				this.messageStore.pushSnackSucces(
					"Your banner picture was succesfully uploaded."
				)

				await this.updateArtistSettings({
					page: {
						...this.currentSettings.page,
						bannerImage: this.newSettings.page.bannerImage,
					},
				})
			})

			upload?.on("error", (err) => {
				console.error(err)
				this.bannerUpload.loading = false
				this.messageStore.pushSnackError(err.message)
			})
		},

		async getTwitterVerificationLink() {
			const { data, error } = await dartClient
				.query(GetTwitterVerificationLinkDocument, {})
				.toPromise()

			if (error) {
				return this.messageStore.pushSnackError(
					error.graphQLErrors[0].message || error.message
				)
			}

			if (!data) {
				return this.messageStore.pushSnackError(
					"Something went wrong when trying to generate your Twitter link."
				)
			}

			return data.getTwitterVerificationLink
		},

		async search() {
			if (this.searchTerm.length < 2) {
				return
			}

			const { data, error } = await dartClient
				.query(SearchArtistDocument, {
					searchTerm: this.searchTerm,
				})
				.toPromise()

			if (error) {
				return this.messageStore.pushSnackError(
					error.graphQLErrors[0].message || error.message
				)
			}

			if (data && data.searchArtist) {
				this.searchResults = data.searchArtist
			}
		},
	},

	getters: {},
})
