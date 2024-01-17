import {
	dartClient,
	GetCollectionSettingsDocument,
	GetUserCollectionsDocument,
	UpsertCollectionDocument,
	DeleteCollectionDocument,
	CollectionSettings,
} from "@/graphql/client"

import { fileroom as Fileroom } from "@/functions/fileroom/client"

const nestedStores = {
	messageStore: useMessageStore,
}

export const useEditCollectionStore = defineStore("editCollectionStore", {
	state: () => {
		return useNestedStores(nestedStores, {
			editCollection: {} as CollectionSettings,
			orignalCollection: {} as CollectionSettings,
			collections: [] as Array<CollectionSettings>,
			cardUpload: {
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
		async getSettings(id?: string) {
			const { data, error } = await dartClient
				.query(GetCollectionSettingsDocument, { id })
				.toPromise()

			if (error) {
				return this.messageStore.pushSnackError(
					error.graphQLErrors[0].message || error.message
				)
			}

			if (data && data.getCollectionSettings) {
				this.editCollection = data.getCollectionSettings
				this.orignalCollection = JSON.parse(
					JSON.stringify(data.getCollectionSettings)
				)
			}
		},

		async getUserCollecctions() {
			const { data, error } = await dartClient
				.query(GetUserCollectionsDocument, {})
				.toPromise()

			if (error) {
				return this.messageStore.pushSnackError(
					error.graphQLErrors[0].message || error.message
				)
			}

			if (data && data.getUserCollections) {
				this.collections = data.getUserCollections
			}
		},

		async update() {
			const {
				id,
				locked,
				artists,
				attributes,
				mintingAddresses,
				stats,
				normalizedTitle,
				...settings
			} = this.editCollection

			const { data, error } = await dartClient
				.mutation(UpsertCollectionDocument, {
					id: this.editCollection.id,
					settings: {
						...settings,
						mintingAddresses: mintingAddresses.map(
							(address) => address.address
						),
						attributes: attributes.map((attr) => {
							return {
								...attr,
								range: {
									min: attr.range.min,
									max: attr.range.max,
								},
								values: attr.values.map((value) =>
									value.value.trim()
								),
							}
						}),
					},
				})
				.toPromise()

			if (error) {
				return this.messageStore.pushSnackError(
					error.graphQLErrors[0].message || error.message
				)
			}

			if (data && data.upsertCollection) {
				this.editCollection = data.upsertCollection
				this.orignalCollection = JSON.parse(
					JSON.stringify(data.upsertCollection)
				)

				this.messageStore.pushSnackSucces(
					`Collection "${settings.title}" successfully updated.`
				)

				return data.upsertCollection
			}
		},

		async delete(id: string) {
			const { data, error } = await dartClient
				.mutation(DeleteCollectionDocument, { id })
				.toPromise()

			if (error) {
				return this.messageStore.pushSnackError(
					error.graphQLErrors[0].message || error.message
				)
			}

			if (data && data.deleteCollection) {
				const index = this.collections.findIndex((c) => c.id === id)

				const title = this.collections[index].title

				if (index >= 0) {
					this.collections.splice(index, 1)
				}

				this.messageStore.pushSnackSucces(
					`Collection ${title} successfully deleted.`
				)
			}
		},

		async uploadCardImage(file: File) {
			this.cardUpload.loading = true

			let fileroomClient = new Fileroom.Client({
				env: Fileroom.env,
				accessToken: Fileroom.getAuthToken(),
			})
			let upload = await fileroomClient.files.uploadFiles(file, {
				resize: ["640x776", "320x388"],
				resizeOptions: {
					fit: "inside",
				},
			})

			upload?.on("progress", (data) => {
				this.cardUpload.progress = data.overallProgress
				this.cardUpload.message = "Processing upload"
			})

			upload?.on("completed", async (data) => {
				const file = data.hasOwnProperty("file") ? data.file : data

				this.editCollection.media.card = {
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

				this.cardUpload = {
					loading: false,
					progress: 0,
					message: "Uploading media",
				}

				this.messageStore.pushSnackSucces(
					"The collection preview card image was succesfully uploaded."
				)

				await this.update()
			})

			upload?.on("error", (err) => {
				console.error(err)
				this.cardUpload.loading = false
				this.messageStore.pushSnackError(err.message)
			})
		},

		async uploadBannerImage(file: File) {
			this.bannerUpload.loading = true
			let fileroomClient = new Fileroom.Client({
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
				this.bannerUpload.message = "Processing upload"
			})

			upload?.on("completed", async (data) => {
				const file = data.hasOwnProperty("file") ? data.file : data

				this.editCollection.media.banner = {
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
					"The collection banner was succesfully uploaded."
				)

				await this.update()
			})

			upload?.on("error", (err) => {
				console.error(err)
				this.bannerUpload.loading = false
				this.messageStore.pushSnackError(err.message)
			})
		},
	},

	getters: {},
})
