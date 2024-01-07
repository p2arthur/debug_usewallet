<template>
  <ModalsBaseModal>
    <div class="artist-details" v-if="artist && artistStore.artist">
      <div class="artist-details-section">
        <div class="artist-details-section-header">
          <div class="artist-details-section-header-image">
            <img 
              v-if="artist.page.profileImage" 
              :src="resolveMediaToCDN(artist.page.profileImage, 512)" 
              alt="avatar"
              crossorigin=""
            >
          </div>

          <div class="artist-details-section-header-info">
            <div class="artist-details-section-header-info-main">
              <div class="artist-details-section-header-info-main-name">
                <h1>{{ artist.name }}</h1>
              </div>

              <div  class="artist-details-section-header-info-main-address">
                <a :href="addressLink(artistStore.artist.walletAddress)" target="_blank">{{ artistStore.artist.walletAddress }}</a>
              </div>
            </div>

            <div class="artist-details-section-header-info-sub">
              <div class="artist-details-section-header-info-sub-item" v-if="artist.location">
                <IconsLocation />
                <p>{{ artist.location }}</p>
              </div>

              <div class="artist-details-section-header-info-sub-item">
                <IconsDate />
                <p>Joined {{ joinDate(artist.joinDate) }}</p>
              </div>

              <div class="artist-details-section-header-info-sub-item" v-if="artist.featured.isFeatured">
                <IconsVerified />
                <p>
                  <span>Featured in: </span>
                  <a>Best of Brazil</a>
                  <span> & </span>
                  <a>Tamers of the AI</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="artist-details-section">
        <p>{{ artist.page.description }}</p>
      </div>

      <div class="artist-details-section" v-if="artist.page.twitter">
        <h3>Verified accounts</h3>

        <a
          class="social-button social-button-twitter"
          target="_blank"
          :href="`https://twitter.com/${artist.page.twitter}`"
        >
          <IconsTwitter />
          <span>@{{ artist.page.twitter }}</span>
        </a>
      </div>

      <div class="artist-details-section" v-if="artist.page.customLinks && artist.page.customLinks.length > 0">
        <h3>Links</h3>

        <a
          class="artist-details-section-link"
          v-for="link in artist.page.customLinks"
          :key="link.url"
          target="_blank"
          :href="link.url"
        >
          <span>{{ link.name }}</span>
          <IconsOpenInNew />
        </a>
      </div>
    </div>

    <div class="close">
      <ButtonsTextButton @click="$emit('close')">
        <IconsRemove />
      </ButtonsTextButton>
    </div>
  </ModalsBaseModal>
</template>

<script setup lang="ts">

import { openAddress } from '@/functions/Explorer'
import { resolveCid, resolveMediaToCDN } from '@/functions/media'

defineEmits(['close'])

const settingsStore = useSettingsStore()
const artistStore = useArtistStore()

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

</script>

<style scoped lang="scss">

.close {
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px;
}

.artist-details {
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 16px;


  &-section {
    display: flex;
    flex-direction: column;
    gap: 8px;

    &-header {
      display: flex;
      gap: 16px;

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

    & p {
      max-width: 50ch;
      margin: 0px;
      font-size: 1rem;
      line-height: 1.4rem;
    }

    & h3 {
      margin: 0px;
      font-weight: 600;
    }

    &-link {
      display: flex;
      align-items: center;
      padding: 0px 12px;
      height: 48px;
      background-color: $c-primary-transparent;
      color: $c-on-primary-transparent;
      border-radius: $radius-m;
      transition: color 150ms ease, background-color 150ms ease;
      cursor: pointer;

      & span {
        flex-grow: 1;
        text-align: center;
        color: $c-on-primary-transparent;
        font-size: 1.1rem;
        font-weight: 500;
      }

      &:hover {
        background-color: $c-secondary-transparent;
        color: $c-on-secondary-transparent;
      }
    }
  }
}

.social-button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border: none;
  color: white;
  height: 44px;
  padding: 0px 12px;
  border-radius: $radius-m;
  cursor: pointer;

  & span {
    color: white;
    font-weight: 600;
    font-size: 1rem;
  }

  &:hover {
    color: white;
  }

  &-twitter {
    background-color: #229bec;
  }

  &-instagram {
    background: #f09433; 
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  }
}

</style>