<template>
  <div class="artist" v-if="artist && artistStore.artist">
    <div class="artist-header">
      <div class="artist-header-banner">
        <img
          v-if="artist.page.bannerImage"
          :src="resolveCid(artist.page.bannerImage, 384)"
          alt="banner"
          crossorigin=""
        >
      </div>

      <div class="artist-header-card" v-if="isDesktop">
        <div class="artist-header-card-image">
          <img 
            v-if="artist.page.profileImage" 
            :src="resolveCid(artist.page.profileImage, 512)" 
            alt="avatar"
            crossorigin=""
          >
        </div>

        <div class="artist-header-card-info">
          <div class="artist-header-card-info-main">
            <div class="artist-header-card-info-main-name">
              <h1>{{ artist.name }}</h1>
            </div>

            <div class="artist-header-card-info-main-address">
              <a :href="addressLink(artistStore.artist.walletAddress)" target="_blank">{{ artistStore.artist.walletAddress }}</a>
            </div>

            <div class="artist-header-card-info-main-actions">
              <a
                v-if="artist.page.twitter"
                class="artist-header-card-info-main-actions-button" 
                target="_blank"
                :href="`https://twitter.com/${artist.page.twitter}`"
              >
                <IconsTwitter />
              </a>

              <button class="artist-header-card-info-main-actions-button" @click="openDetails()">
                <IconsInfo />
              </button>
            </div>
          </div>

          <div class="artist-header-card-info-sub">
            <div class="artist-header-card-info-sub-item" v-if="artist.location">
              <IconsLocation />
              <p>{{ artist.location }}</p>
            </div>

            <div class="artist-header-card-info-sub-item">
              <IconsDate />
              <p>Joined {{ joinDate(artist.joinDate) }}</p>
            </div>

            <div class="artist-header-card-info-sub-item" v-if="artist.featured.isFeatured">
              <IconsVerified />
              <p>
                <span>Featured in: </span>
                <template
                  v-for="(title, index) in artist.featured.categories"
                >
                  <a>{{ title }}</a>
                  <span v-if="artist.featured.categories.length !== (index + 1)"> & </span>
                </template>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="artist-header-avatar" v-if="!isDesktop">
        <div class="artist-header-avatar-image">
          <img 
            v-if="artist.page.profileImage"
            :src="resolveCid(artist.page.profileImage, 256)" 
            alt="avatar"
            crossorigin=""
          >
        </div>
      </div>

      <div class="artist-header-actions" v-if="!isDesktop">
        <button class="artist-header-actions-follow">
          <IconsFollow style="width: 28px; height: 28px;" />
          <span>Follow</span>
        </button>

        <div class="spacer"></div>

        <a
          v-if="artist.page.twitter"
          class="artist-header-card-info-main-actions-button" 
          target="_blank"
          :href="`https://twitter.com/${artist.page.twitter}`"
        >
          <IconsTwitter />
        </a>

        <button class="artist-header-card-info-main-actions-button" @click="openDetails()">
          <IconsInfo style="width: 28px; height: 28px;" />
        </button>
      </div>

      <div class="artist-header-info" v-if="!isDesktop">
        <div class="artist-header-card-info-main">
          <div class="artist-header-card-info-main-name">
            <h1>{{ artist.name }}</h1>
          </div>

          <div class="artist-header-card-info-main-address">
            <a :href="addressLink(artistStore.artist.walletAddress)" target="_blank">{{ artistStore.artist.walletAddress }}</a>
          </div>
        </div>

        <div class="artist-header-card-info-sub">
          <div class="artist-header-card-info-sub-item">
            <IconsLocation />
            <p>{{ artist.location }}</p>
          </div>

          <div class="artist-header-card-info-sub-item">
            <IconsDate />
            <p>Joined {{ joinDate(artist.joinDate) }}</p>
          </div>

          <div class="artist-header-card-info-sub-item" v-if="artist.featured.isFeatured">
            <IconsVerified />
            <p>
              <span>Featured in: </span>
              <template
                v-for="(title, index) in artist.featured.categories"
              >
                <a>{{ title }}</a>
                <span v-if="artist.featured.categories.length !== (index + 1)"> & </span>
              </template>
            </p>
          </div>
        </div>

        <div class="artist-header-sub-stats" style="padding: 0px">
          <div class="artist-header-sub-stats-section">
            <p class="artist-header-sub-stats-section-name">Volume sold</p>
            <p class="artist-header-sub-stats-section-value">{{ resolveFiat(artist.stats.totalSold) }}</p>
          </div>

          <div class="artist-header-sub-stats-section">
            <p class="artist-header-sub-stats-section-name">Floor price</p>
            <p class="artist-header-sub-stats-section-value">{{ resolveFiat(artist.stats.floor) }}</p>
          </div>

          <div class="artist-header-sub-stats-section">
            <p class="artist-header-sub-stats-section-name">NFTs</p>
            <p class="artist-header-sub-stats-section-value">{{ numberFormater.format(artist.stats.totalMinted) }}</p>
          </div>
        </div>

        <!-- <div class="artist-header-info-follow">
          <div class="artist-header-sub-stats-section">
            <p class="artist-header-sub-stats-section-name">Following</p>
            <p class="artist-header-sub-stats-section-value">{{ numberFormater.format(artistStore.artist.generalStats.following) }}</p>
          </div>

          <div class="artist-header-sub-stats-section">
            <p class="artist-header-sub-stats-section-name">Followers</p>
            <p class="artist-header-sub-stats-section-value">{{ numberFormater.format(artistStore.artist.generalStats.followers) }}</p>
          </div>
        </div> -->
      </div>

      <div class="artist-header-sub" v-if="isDesktop">
        <div class="artist-header-sub-stats">
          <div class="artist-header-sub-stats-section">
            <p class="artist-header-sub-stats-section-name">Volume sold</p>
            <p class="artist-header-sub-stats-section-value">{{ resolveFiat(artist.stats.totalSold) }}</p>
          </div>

          <div class="artist-header-sub-stats-section">
            <p class="artist-header-sub-stats-section-name">Floor price</p>
            <p class="artist-header-sub-stats-section-value">{{ resolveFiat(artist.stats.floor) }}</p>
          </div>

          <div class="artist-header-sub-stats-section">
            <p class="artist-header-sub-stats-section-name">NFTs</p>
            <p class="artist-header-sub-stats-section-value">{{ numberFormater.format(artist.stats.totalMinted) }}</p>
          </div>
        </div>

        <!-- <div class="artist-header-sub-follow" v-if="isDesktop">
          <p>
            <span>{{ numberFormater.format(artistStore.artist.generalStats.following) }} Following | </span>
            <span>{{ numberFormater.format(artistStore.artist.generalStats.followers) }} Followers</span>
          </p>

          <div class="artist-header-sub-follow-actions">
            <button class="artist-header-sub-follow-actions-button">
              <IconsFollow />
              <span>Follow</span>
            </button>
          </div>
        </div> -->
      </div>
    </div>

    <div class="artist-tabs">
      <NavigationTabBar 
        :tabs="tabs"
        :active="activeTab"
        @change="changeTab"
      />
    </div>

    <div class="artist-view">
      <router-view></router-view>
    </div>
  </div>

  <ModalsArtistDetails
    v-show="showDetails"
    @close="closeDetails()"
  />
</template>

<script setup lang="ts">

import { openAddress } from '@/functions/Explorer'
import { resolveCid, resolveMediaToCDN } from '@/functions/media'

const settingsStore = useSettingsStore()
const artistStore = useArtistStore()

const showDetails = ref(false)
const route = useRoute()
const router = useRouter()
const isDesktop = useIsDesktop()

if (route.query.details && route.query.details === "true") {
  showDetails.value = true
}

const name = computed(() => {
  return `${router.currentRoute.value.params.name}`
})

await useAsyncData(async () => {
  await artistStore.getAristDetails(name.value)
})

const artist = computed(() => {
  return artistStore.artist?.artist
})

const addressLink = function (address: string) {
  return openAddress(
    address, 
    settingsStore.appSettings.blockChainExplorer, 
    settingsStore.appSettings.network
  )
}

const joinDate = function (date: string) {
  return new Date(date).toLocaleDateString('en-GB',{ 
    month: 'long',
    year: 'numeric'
  })
}

const currencyFormater = useCurrencyFormater()

const numberFormater = Intl.NumberFormat('en', { 
  notation: 'compact',
  maximumFractionDigits: 1,
  minimumFractionDigits: 0,
})

const tabs = [
  { name: "Home", value: "home" },
  { name: "Created", value: "created" },
  { name: "Collections", value: "collections" },
  { name: "Collected", value: "collected" },
  { name: "Activity", value: "activity" },
  // { name: "Statistics", value: "statistics" },
]

const activeTab = computed(() => {
  const foundTab = tabs.find((tab) => router.currentRoute.value.fullPath.match(tab.value))

  if (foundTab) {
    return foundTab
  } else {
    return tabs[0]
  }
})

function changeTab (tab: { name: string, value: string }) {
  if (tab.value === 'home') {
    router.push(`/artists/${name.value}`)
  } else {
    router.push(`/artists/${name.value}/${tab.value}`)
  }
}

function resolveFiat (fiatObject: Record<string, number>) {
  return currencyFormater.value.format(fiatObject[settingsStore.appSettings.currency] || 0)
}

function closeDetails () {
  router.replace(route.path)
  showDetails.value = false
}

function openDetails () {
  router.replace(`${route.path}?details=true`)
  showDetails.value = true
}

useHead({
  title: artistStore.artist?.artist.name,
  titleTemplate: `${artistStore.artist?.artist.name} - Dartroom`,
  meta: [
    {
      hid: "og:title",
      name: "og:title",
      content: artistStore.artist?.artist.name,
    },
    {
      hid: "og:type",
      name: "og:type",
      content: "website",
    },
    {
      hid: "og:image",
      name: "og:image",
      content: resolveMediaToCDN(artistStore.artist?.artist.page.profileImage, 512),
    },
    {
      hid: "og:image:type",
      name: "og:image:type",
      content: "image/webp",
    },
    {
      hid: "og:url",
      name: "og:url",
      content: `https://v2.dartroom.xyz/artists/${artistStore.artist?.artist.normalizedName}`
    },
    {
      hid: "og:description",
      name: "og:description",
      content: artistStore.artist?.artist.page.description,
    },
    {
      hid: "og:site_name",
      name: "og:site_name",
      content: "Dartroom",
    },
    {
      hid: "twitter:site",
      name: "twitter:site",
      content: "@_Dartroom",
    },
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image",
    }
  ]
})

</script>

<style scoped lang="scss">

.artist {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;

  @media screen and (max-width: calc($sidebar-thin-breakpoint - 1px)) {
    padding-top: 0px;
  }

  &-header {
    width: 100%;
    max-width: 1920px;
    position: relative;

    &-banner {
      display: flex;
      overflow: hidden;
      width: 100%;
      background-color: $c-flat;
      border-radius: $radius-l;
      min-width: 100%;
      min-height: 192px;

      & img {
        object-fit: cover;
        width: 100%;
        height: 192px;
      }

      @media screen and (max-width: calc($sidebar-thin-breakpoint - 1px)) {
        border-radius: 0px;
        margin-bottom: 56px;
        min-height: 96px;

        & img {
          object-fit: cover;
          width: 100%;
          height: 96px;
        }
      }
    }

    &-card {
      position: absolute;
      display: flex;
      height: 148px;
      border-radius: $radius-l;
      background-color: $c-background-0;
      padding: 8px;
      gap: 8px;
      max-width: 484px;
      transform: translate(96px, -82px);

      &-image {
        display: flex;
        border-radius: $radius-m;
        overflow: hidden;
        min-height: 148px;
        min-width: 148px;
        max-height: 148px;
        max-width: 148px;
        background-color: $c-flat;

        & img {
          object-fit: cover;
          height: 148px;
          width: 148px;
        }
      }

      &-info {
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-width: 330px;

        &-main {
          display: grid;
          grid-template-areas:
            "name    actions"
            "address actions"
          ;
          column-gap: 8px;
          max-width: 100%;
          color: $c-on-background;

          &-name {
            display: flex;
            grid-area: name;
            overflow: hidden;

            & h1 {
              margin: 0px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              font-size: 1.4rem;
            }
          }

          &-address {
            display: flex;
            grid-area: address;
            overflow: hidden;

            & a {
              margin: 0px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              font-family: $f-mono;
              font-weight: 400;
              font-size: 0.95rem;
            }
          }

          &-actions {
            grid-area: actions;
            display: flex;
            gap: 8px;
            
            &-button {
              display: flex;
              background-color: transparent;
              border: none;
              padding: 0px;
              margin: 0px;
              cursor: pointer;
              transition: color 150ms ease;
              color: $c-on-background;

              &:hover {
                color: $c-secondary
              }
            }
          }
        }

        &-sub {
          display: flex;
          flex-direction: column;
          gap: 8px;

          &-item {
            display: flex;
            align-items: center;
            height: 24px;
            gap: 8px;
            color: $c-on-background;

            & p {
              font-weight: 500;
              margin: 0px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            }

            & a {
              font-weight: 500;
              color: $c-secondary;
              text-decoration-line: underline;
              cursor: pointer;
            }
          }
        }
      }
    }

    &-avatar {
      position: absolute;
      top: 40px;
      left: calc(50% - 56px);
      padding: 8px;
      background-color: $c-background-0;
      border-radius: $radius-l;

      &-image {
        display: flex;
        border-radius: $radius-m;
        overflow: hidden;
        min-height: 96px;
        min-width: 96px;
        max-height: 96px;
        max-width: 96px;
        background-color: $c-flat;

        & img {
          object-fit: cover;
          height: 96px;
          width: 96px;
        }
      }
    }

    &-actions {
      position: absolute;
      top: 96px;
      display: flex;
      align-items: center;
      padding: 8px;
      gap: 8px;
      width: calc(100% - 16px);

      &-follow {
        display: flex;
        padding: 0px;
        margin: 0px;
        align-items: center;
        gap: 8px;
        background-color: transparent;
        border: none;
        color: $c-on-background;
        cursor: pointer;
        font-weight: 500;
        font-size: 1rem;

        &:hover {
          color: $c-secondary;

          & span {
            color: $c-secondary;
          }
        }
      }
    }

    &-sub {
      display: flex;
      height: 82px;
      margin-left: 596px;
      justify-content: space-between;

      @media screen and (max-width: 1199px) {
        justify-content: left;
        margin-top: 82px;
        margin-left: 96px;
        gap: 25px;
      }

      &-stats {
        padding: 16px;
        display: flex;
        gap: 16px;

        &-section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          
          &-name {
            font-size: 0.9rem;
            font-weight: 500;
            margin: 0px;
          }

          &-value {
            font-size: 1.2rem;
            font-weight: 600;
            margin: 0px;
          }
        }
      }

      &-follow {
        padding: 16px 0px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 4px;

        & p {
          font-size: 0.90rem;
          font-weight: 400;
          margin: 0px;
        }

        &-actions {

          &-button {
            display: flex;
            padding: 0px;
            margin: 0px;
            align-items: center;
            gap: 8px;
            background-color: transparent;
            border: none;
            color: $c-on-background;
            cursor: pointer;

            &:hover {
              color: $c-secondary;

              & span {
                color: $c-secondary;
              }
            }
          }
        }
      }
    }

    &-info {
      display: flex;
      padding: 16px;
      flex-direction: column;
      gap: 16px;

      &-follow {
        display: flex;
        gap: 16px;
      }
    }
  }

  &-tabs {
    display: flex;
    width: 100%;
    max-width: 1920px;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: -1px;
    padding-top: 16px;
    background-color: $c-background-0;
    z-index: 10;
  }

  &-view {
    display: flex;
    width: 100%;
  }
}

</style>