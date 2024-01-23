import {
	dartClient,
	ViewApplicationStatusDocument,
	ApplicationStatus,
	SubmitApplicationSocialsDocument,
	CreateApplicationDocument,
	SaveApplicationLinksDocument,
	CreateArtistAccountDocument,
	VerifyTxnDocument,
} from "@/graphql/client"

import type {
	UsignedTxn,
	SignedTxn,
	CreateArtistAccountMutationVariables,
} from "@/graphql/client"

const nestedStores = {
  messageStore: useMessageStore,
	accountStore: useAccountStore
}

export const useApplyStore = defineStore("apply", {
	state: () => {
		return useNestedStores(nestedStores, {
			status: {} as ApplicationStatus | undefined,
			verifyTxn: null as Array<Array<Omit<UsignedTxn, "__typename">>> | null,
		})
	},
	
	hydrate(state) {
    useHydrateNestedStores(nestedStores, state)
	},

	actions: {
		async submitNewApplication(form: { name: string; email: string }) {
			const { data } = await dartClient
				.mutation(CreateApplicationDocument, form)
				.toPromise()
		},

		async saveApplicationLinks(form: {
			id: string
			token: string
			links: string
		}) {
			const { data } = await dartClient
				.mutation(SaveApplicationLinksDocument, form)
				.toPromise()
		},

		async submitApplicationSocials(form: {
			id: string
			token: string
			links: string
		}) {
			const { data } = await dartClient
				.mutation(SubmitApplicationSocialsDocument, form)
				.toPromise()
		},

		async applicationStatus(id: string, token: string) {
			const { data } = await dartClient
				.query(ViewApplicationStatusDocument, { id, token })
				.toPromise()

			if (data && data.viewApplicationStatus) {
				this.status = data.viewApplicationStatus
			}
		},

		async getVerifyTxn(address: string) {
			const { data } = await dartClient
				.query(VerifyTxnDocument, { address })
				.toPromise()

			if (data && data.verifyTxn) {
				this.verifyTxn = data.verifyTxn
			}
		},

		async createAristAccount(form: CreateArtistAccountMutationVariables) {
			const { data, error } = await dartClient
				.mutation(CreateArtistAccountDocument, form)
				.toPromise()

			if (error) {
				return this.messageStore.pushSnackError(
					error.graphQLErrors[0].message || error.message
				)
			}

			if (data && data.createArtistAccount) {
				this.messageStore.pushSnackSucces(data.createArtistAccount)
				this.messageStore.pushMessage({
					type: 'INFO',
					title: '',
					details: "Please login again to get access to your new artist account.",
					cardType: 'SNACKBAR',
					autoRemove: false
				})
				this.accountStore.removeUser(form.address)
				this.accountStore.loginModal = true
			}
		},
	},

	getters: {},
})

export { UsignedTxn, SignedTxn }
