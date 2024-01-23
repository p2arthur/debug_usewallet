import {
	dartClient,
	GetNftTemplateDocument,
	CreateNewNftDocument,
	EditNftDocument,
	GetNftSettingsDocument,
	NftSettings,
	GetConceptNfTsDocument,
	PageInfo,
	DeleteNfTsDocument,
	GetMintNftParamsDocument,
	SubmitMintNftDocument,
	GetDeleteNftParamsDocument,
	SubmitDeleteNftDocument,
	SignedTxn,
} from "@/graphql/client"
import { fileroom as Fileroom } from "../functions/fileroom/client"

export type StepStatus = "OPEN" | "COMPLETED" | "LOCKED"

export interface Step {
	title: string
	status: StepStatus
	link: string
}

export interface NFT {
	version: number
	status: "CONCEPT" | "MINTED"
	stage: "INFO" | "COLLECTION" | "MEDIA" | "TOKEN"
	imported: boolean
	edit: {
		info: StepStatus
		collection: StepStatus
		media: StepStatus
		token: StepStatus
	}
	info: {
		title: string
		description: string
		link: string
		nsfw: boolean
		ai: boolean
		aiDescription: string
		tags: Array<string>
		updated: boolean
	}
	token: {
		index: number
		unitName: string
		assetName: string
		royalty: number
		mintAddress: string
		timestamp: string
		editions: number
	}
	c: {
		id: string
		title: string
		normalizedTitle: string
		attributes: Array<{
			traitType: string
			displayType: string
			value: string
		}>
		card: {
			cid: string
			mimeType: string
			previews: [
				{
					size: number
					cid: string
					mimeType: string
				}
			]
		}
	}
	card: {
		x: number
		y: number
		type: "SQUARE" | "WIDE"
	}
	media: {
		id: string
		cid: string
		dimensions: string
		storageSize: number
		mimeType: string
		integrity: string
		previews: [
			{
				size: number
				cid: string
				mimeType: string
				integrity: string
			}
		]
	}
	metadata: {
		id: string
		cid: string
		mimeType: string
		integrity: string
	}
	listings: {
		listed: boolean
		auctions: Array<{
			primary: boolean
			currency: string
			price: number
			duration: number
			highestBid: number
			started: boolean
		}>
		fixedBid: Array<{
			primary: boolean
			currency: string
			price: number
		}>
	}
	statistics: {
		sold: boolean
		latestSale: {
			currency: string
			price: number
			value: Record<string, number>
		}
	}
}

const nestedStores = {
	messageStore: useMessageStore,
	accountStore: useAccountStore,
	createdNFTStore: useCreatedNFTsStore,
}

export const useEditNFTStore = defineStore("editNFT", {
	state: () => {
		return useNestedStores(nestedStores, {
			nft: {} as NftSettings,
			originalNFT: {} as NftSettings,
			nfts: [] as Array<NftSettings>,
			nftsPageInfo: null as null | PageInfo,
			nftUpload: {
				loading: false,
				progress: 0,
				message: "Uploading media",
			},
			thumbnailUpload: {
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
		async getNewNFTTemplate() {
			const { data, error } = await dartClient
				.query(GetNftTemplateDocument, {})
				.toPromise()

			if (error) {
				return this.messageStore.pushSnackError(
					error.graphQLErrors[0].message || error.message
				)
			}

			if (data && data.getNFTTemplate) {
				this.nft = data.getNFTTemplate
				this.originalNFT = JSON.parse(JSON.stringify(this.nft))
			}
		},

		async getNFTSettings(id: string) {
			const { data, error } = await dartClient
				.query(GetNftSettingsDocument, { id })
				.toPromise()

			if (error) {
				return this.messageStore.pushSnackError(
					error.graphQLErrors[0].message || error.message
				)
			}

			if (data && data.getNFTSettings) {
				this.nft = data.getNFTSettings
				this.originalNFT = JSON.parse(JSON.stringify(this.nft))
			}
		},

		async createNFT() {
			const { data, error } = await dartClient
				.mutation(CreateNewNftDocument, {
					settings: {
						info: this.nft.info,
						token: this.nft.token,
						c: this.nft.c,
						card: this.nft.card,
						media: this.nft.media,
					},
				})
				.toPromise()

			if (error) {
				return this.messageStore.pushSnackError(
					error.graphQLErrors[0].message || error.message
				)
			}

			if (data && data.createNewNFT) {
				this.nft = data.createNewNFT
				this.originalNFT = JSON.parse(JSON.stringify(this.nft))

				if (this.nfts) {
					const index = this.nfts.findIndex(
						(nfts) => nfts.id === data.createNewNFT.id
					)

					if (index < 0) {
						this.nfts.unshift(
							JSON.parse(JSON.stringify(this.nft))
						)
					}
				}

				return data.createNewNFT.id
			}
		},

		async editNFT() {
			if (!this.nft.id) {
				return
			}

			const { data, error } = await dartClient
				.mutation(EditNftDocument, {
					id: this.nft.id,
					settings: {
						info: this.nft.info,
						token: this.nft.token,
						c: this.nft.c,
						card: this.nft.card,
						media: this.nft.media,
					},
				})
				.toPromise()

			if (error) {
				return this.messageStore.pushSnackError(
					error.graphQLErrors[0].message || error.message
				)
			}

			if (data && data.editNFT) {
				this.nft = data.editNFT
				this.originalNFT = JSON.parse(JSON.stringify(this.nft))

				if (this.nfts) {
					const index = this.nfts.findIndex(
						(nfts) => nfts.id === data.editNFT.id
					)

					if (index >= 0) {
						this.nfts[index] = JSON.parse(
							JSON.stringify(this.nft)
						)
					}
				}
			}
		},

		async uploadNFTMedia(file: File) {
			this.nftUpload.loading = true

			let fileRoomClient = new Fileroom.Client({
				env: Fileroom.env,
				accessToken: Fileroom.getAuthToken(),
			})

			let resize

			if (file.type.includes("video")) {
				resize = ["480", "720", "1080"]
			} else {
				resize = ["512x512", "1024x1024", "2048x2048"]
			}

			let upload = await fileRoomClient.files.uploadFiles(file, {
				resize,
				resizeOptions: {
					fit: "inside",
				},
			})
			upload?.on("progress", (data) => {
				this.nftUpload.progress = data.overallProgress
				this.nftUpload.message = "Processing upload"
			})

			upload?.on("completed", async (data) => {
				const file = data.hasOwnProperty("file") ? data.file : data

				this.nft.media = {
					fileroomId: file._id,
					cid: file.original.cid,
					mimeType: file.original.mimetype,
					storageSize: file.original.size,
					integrity: file.original.integrityHash,
					dimensions: "",
					previews: file.previews.map((preview: any) => {
						return {
							cid: preview.cid,
							mimeType: preview.mimetype,
							size: preview.height,
						}
					}),
				}

				this.nftUpload = {
					loading: false,
					progress: 0,
					message: "Uploading media",
				}

				this.messageStore.pushSnackSucces(
					"The collection preview card image was succesfully uploaded."
				)

				await this.editNFT()
			})

			upload?.on("error", (err) => {
				console.error(err)
				this.nftUpload.loading = false
				this.messageStore.pushSnackError(err.message)
			})
		},

		async uploadThumbnail(file: File) {
			if (!this.nft.media) {
				this.messageStore.pushSnackError(
					"Please first upload a video before uploading the thumbnail."
				)
				return
			}

			this.thumbnailUpload.loading = true

			let fileRoomClient = new Fileroom.Client({
				env: Fileroom.env,
				accessToken: Fileroom.getAuthToken(),
			})

			let resize

			if (file.type.includes("video")) {
				resize = ["480", "720", "1080"]
			} else {
				resize = ["512x512", "1024x1024", "2048x2048"]
			}

			let upload = await fileRoomClient.files.uploadFiles(file, {
				resize,
				resizeOptions: {
					fit: "inside",
				},
			})

			upload?.on("progress", (data) => {
				this.thumbnailUpload.progress = data.overallProgress
				this.thumbnailUpload.message = "Processing upload"
			})

			upload?.on("completed", async (data) => {
				const file = data.hasOwnProperty("file") ? data.file : data

				if (!this.nft.media) {
					return
				}

				this.nft.media.thumbnail = {
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

				this.thumbnailUpload = {
					loading: false,
					progress: 0,
					message: "Uploading media",
				}

				this.messageStore.pushSnackSucces(
					"The thumbnial image was succesfully uploaded."
				)

				await this.editNFT()
			})

			upload?.on("error", (err) => {
				console.error(err)
				this.nftUpload.loading = false
				this.messageStore.pushSnackError(err.message)
			})
		},

		async deleteNFTs(ids: Array<string>) {
			const { data, error } = await dartClient
				.mutation(DeleteNfTsDocument, {
					ids: ids,
				})
				.toPromise()

			if (error) {
				this.messageStore.pushSnackError(
					error.graphQLErrors[0].message || error.message
				)
				return undefined
			}

			if (data && data.deleteNFTs) {
				const deteledIds = data.deleteNFTs

				for (let i = 0; i < deteledIds.length; i++) {
					const index = this.nfts.findIndex(
						(nft) => nft.id === deteledIds[i]
					)

					if (index >= 0) {
						this.nfts.splice(index, 1)
					}
				}

				return deteledIds
			}
		},

		async getConcepts(refresh?: boolean) {
			if (
				!refresh &&
				this.nftsPageInfo &&
				!this.nftsPageInfo.hasNextPage
			) {
				return
			}

			const { data, error } = await dartClient
				.query(GetConceptNfTsDocument, {
					limit: 20,
					offset: refresh ? 0 : this.nfts.length,
				})
				.toPromise()

			if (error) {
				return this.messageStore.pushSnackError(
					error.graphQLErrors[0].message || error.message
				)
			}

			if (data && data.getConceptNFTs) {
				if (data.getConceptNFTs.nfts) {
					if (refresh) {
						this.nfts = data.getConceptNFTs.nfts
					} else {
						this.nfts.push(...data.getConceptNFTs.nfts)
					}
					this.nftsPageInfo = data.getConceptNFTs.pageInfo
				}
			}
		},

		async getMintNFTs(ids: Array<string>) {
			console.log("resolve getting transactions")

			const { data, error } = await dartClient
				.query(GetMintNftParamsDocument, { ids: ids })
				.toPromise()

			if (error) {
				this.messageStore.pushSnackError(
					error.graphQLErrors[0].message || error.message
				)
				throw new Error(
					error.graphQLErrors[0].message || error.message
				)
			}

			if (data && data.getMintNFTParams) {
				return data.getMintNFTParams
			} else {
				throw new Error("Failed to extract transaction.")
			}
		},

		async submitMintNFTs(txns: Array<Array<SignedTxn>>) {
			const { data, error } = await dartClient
				.mutation(SubmitMintNftDocument, { txns: txns })
				.toPromise()

			if (error) {
				this.messageStore.pushSnackError(
					error.graphQLErrors[0].message || error.message
				)
				throw new Error(
					error.graphQLErrors[0].message || error.message
				)
			}

			if (data && data.submitMintNFT) {
				if (
					data.submitMintNFT.partialErrors &&
					data.submitMintNFT.partialErrors.length > 0
				) {
					for (
						let i = 0;
						i < data.submitMintNFT.partialErrors.length;
						i++
					) {
						this.messageStore.pushSnackError(
							data.submitMintNFT.partialErrors[i]
						)
					}
				} else {
					this.messageStore.pushSnackSucces(
						"Transactions were successfully submitted to the network."
					)
				}

				for (let i = 0; i < data.submitMintNFT.nfts.length; i++) {
					const index = this.nfts.findIndex(
						(nft) => nft.id === data.submitMintNFT.nfts[i].id
					)

					if (index >= 0) {
						this.nfts.splice(index, 1)
					}
				}
			}
		},

		async getDeleteNFTs(indexes: Array<number>) {
			console.log("resolve getting transactions")

			const { data, error } = await dartClient
				.query(GetDeleteNftParamsDocument, { indexes })
				.toPromise()

			if (error) {
				this.messageStore.pushSnackError(
					error.graphQLErrors[0].message || error.message
				)
				throw new Error(
					error.graphQLErrors[0].message || error.message
				)
			}

			if (data && data.getDeleteNFTParams) {
				return data.getDeleteNFTParams
			} else {
				throw new Error("Failed to extract transaction.")
			}
		},

		async submitDeleteNFTs(txns: Array<Array<SignedTxn>>) {
			const { data, error } = await dartClient
				.mutation(SubmitDeleteNftDocument, { txns })
				.toPromise()

			if (error) {
				this.messageStore.pushSnackError(
					error.graphQLErrors[0].message || error.message
				)
				throw new Error(
					error.graphQLErrors[0].message || error.message
				)
			}

			if (data && data.submitDeleteNFT) {
				if (
					data.submitDeleteNFT.partialErrors &&
					data.submitDeleteNFT.partialErrors.length > 0
				) {
					for (
						let i = 0;
						i < data.submitDeleteNFT.partialErrors.length;
						i++
					) {
						this.messageStore.pushSnackError(
							data.submitDeleteNFT.partialErrors[i]
						)
					}
				} else {
					this.messageStore.pushSnackSucces(
						"Transactions were successfully submitted to the network."
					)
				}

				for (
					let i = 0;
					i < data.submitDeleteNFT.indexes.length;
					i++
				) {
					const index = data.submitDeleteNFT.indexes[i]

					const foundNFTIndex =
						this.createdNFTStore.nfts.findIndex(
							(nft) => nft.nft.token.index === index
						)

					if (foundNFTIndex >= 0) {
						this.createdNFTStore.nfts.splice(foundNFTIndex, 1)
					}
				}
			}
		},
	},

	getters: {},
})
