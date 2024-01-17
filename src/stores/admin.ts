import { 
  dartClient,
  GetApplicationsDocument,
  GetBandsDocument,
  ChangeApplicationStatusDocument,
  NewApplicationsDocument,
  ApplicationDetails,
  ApplicationStatuses,
  InviteArtistDocument,
  CreateBandDocument,
  PageInfo,
  BandStatuses,
  BandStatus,
  BandDetails
} from '@/graphql/client'

const nestedStores = {
  messageStore: useMessageStore
}

export const useAdminStore = defineStore('admin', {
  state: () => {
    return useNestedStores(nestedStores, {
      band: null as null | BandDetails,
      applicationStatus: [] as Array<ApplicationStatuses>,
      lastApplicationStatus: [] as Array<ApplicationStatuses>,
      applications: [] as Array<ApplicationDetails>,
      applicationPageInfo: null as null | PageInfo,
      bandStatus: [] as Array<BandStatuses>,
      lastBandStatus: [] as Array<BandStatuses>,
      bands: [] as Array<BandDetails>,
      bandPageInfo: null as null | PageInfo
    })
  },

  async hydrate(state) {
    useHydrateNestedStores(nestedStores, state)
  },

  actions: {
    async getApplications (page: number, refresh?: boolean) {

      let mustRefresh = refresh

      if (JSON.stringify(this.lastApplicationStatus.sort()) !== JSON.stringify(this.applicationStatus.sort())) {
        this.lastApplicationStatus = JSON.parse(JSON.stringify(this.applicationStatus))
        mustRefresh = true
      }

      const limit = this.applicationPageInfo?.limit || 10

      const { data } = await dartClient.query(GetApplicationsDocument,{   
        status: this.applicationStatus,
        limit,
        offset: mustRefresh ? ((page - 1) * limit) : this.applications.length
      }).toPromise()

      if (data && data.getApplications) {
        if (mustRefresh) {
          this.applications = data.getApplications.applications
        } else {
          this.applications.push(...data.getApplications.applications)
        }

        this.applicationPageInfo = data.getApplications.pageInfo
      }
    },

    
    async getBands (page: number, refresh?: boolean) {

      let mustRefresh = refresh

      if (JSON.stringify(this.lastBandStatus.sort()) !== JSON.stringify(this.bandStatus.sort())) {
        this.lastBandStatus = JSON.parse(JSON.stringify(this.bandStatus))
        mustRefresh = true
      }

      const limit = this.bandPageInfo?.limit || 10

      const { data } = await dartClient.query(GetBandsDocument,{   
       
      }).toPromise()

      if (data && data.getBands) {
        if (mustRefresh) {
          this.bands = data.getBands.bands
        } else {
          this.bands.push(...data.getBands.bands)
        }

        this.bandPageInfo = data.getBands.pageInfo
      }

    },

    async changeApplicationStatus (id: string, status: ApplicationStatuses) {

      const { data, error } = await dartClient.mutation(ChangeApplicationStatusDocument,{
        id: id,
        status: status
      }).toPromise()

      if (error) {
				return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
			}

      if (data && data.changeApplicationStatus) {
        this.messageStore.pushSnackSucces('Application status changed.')
      }

      // add error reporting logic

      // update data in UI
      const foundStatus = this.applicationStatus.find((s) => s === status)
      const index = this.applications.findIndex((a) => a.id === id)

      if (!foundStatus && this.applicationStatus.length !== 0) {
        if (index >= 0) {
          this.applications.splice(index, 1)
        }
      } else {
        if (data && data.changeApplicationStatus) {
          this.applications[index] = data.changeApplicationStatus
        }
      }
    },

    async invite (name: string, email: string) {

      const { data, error } = await dartClient.mutation(InviteArtistDocument,{
        name,
        email
      }).toPromise()

      if (error) {
				return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
			}

      if (data && data.inviteArtist) {
        this.applications.unshift(data.inviteArtist)
        return data.inviteArtist
      }
    },

    async createBand (name: string, wallets: Array<string>) {

      console.log('createBand in Admin.ts')

      const { data, error } = await dartClient.mutation(CreateBandDocument,{
        name,
        wallets
      }).toPromise()
  
      if (error) {
        return this.messageStore.pushSnackError(error.graphQLErrors[0].message || error.message)
      }

      return true
  
      // if (data && data.inviteArtist) {
      //   this.applications.unshift(data.inviteArtist)
      //   return data.inviteArtist
      // }
    }

  },


  getters: {
  },
})

export { ApplicationStatuses,BandStatuses  }