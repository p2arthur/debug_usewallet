<template>
  <div class="footer-wrapper">
    <footer class="footer">
      <div class="footer-card">
        <div class="footer-main">
          <div class="footer-main-brand">
            <h1>Rxlems</h1>

            <p>The mission of Rxlems is to create a metaverse, which is an innovative virtual environment where players
              can explore, collaborate, and connect in a decentralized and sustainable digital world.</p>

            <div class="footer-main-brand-socials">
              <a class="footer-main-brand-socials-link" target="_blank" href="https://twitter.com/_Dartroom">
                <IconsTwitter />
              </a>

              <a class="footer-main-brand-socials-link" target="_blank" href="https://www.instagram.com/dartroom.xyz/">
                <IconsInstagram />
              </a>

              <a class="footer-main-brand-socials-link" target="_blank" href="https://discord.gg/J8YStrMZAt">
                <IconsDiscord />
              </a>
            </div>
          </div>

          <div class="footer-main-links">
            <div v-for="section in navigation" class="footer-main-links-section">
              <h3>{{ section.section }}</h3>
              <ul>
                <li v-for="link in section.links">
                  <nuxt-link :to="link.link">{{ link.name }}</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-divider">
          <div class="footer-divider-line"></div>
        </div>

        <div class="footer-bar">
          <div class="footer-bar-section">
            <span class="footer-bar-section-name">© 2022-{{ currentYear }} Dartroom Ltd. (UK) - Company House
              13974043</span>
          </div>

          <div class="footer-bar-section">
            <a>Privacy Policy</a>
            <a>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">

const currentYear = new Date().getFullYear()

const navigation = [
  {
    section: "Marketplace",
    links: [
      {
        name: "Link 1",
        link: "/"
      },
      {
        name: "Link 2",
        link: "/"
      },
      // {
      //   name: "Auctions",
      //   link: "/listings/auctions"
      // },
      // {
      //   name: "Link 3",
      //   link: "/artists/all"
      // },
      // {
      //   name: "Link 4",
      //   link: "/collections/all"
      // },
      // {
      //   name: "Link 5",
      //   link: "/sales"
      // }
    ]
  },
  {
    section: "My Account",
    links: [
      {
        name: "Link 1",
        link: "/"
      },
      {
        name: "Link 2",
        link: "/"
      },
    ]
  },
  // {
  //   section: "Resources",
  //   links: [
  //     {
  //       name: "Documentation",
  //       link: "/docs"
  //     },
  //     {
  //       name: "Blog",
  //       link: "/blog"
  //     },
  //     // {
  //     //   name: "Brand kit",
  //     //   link: "/"
  //     // }
  //   ]
  // },
  {
    section: "Company",
    links: [
      {
        name: "Link 1",
        link: "/"
      },
      {
        name: "Link 2",
        link: "/"
      },
    ]
  }
]

</script>

<style scoped lang="scss">
.footer-wrapper {
  position: relative;
  display: flex;
  min-width: calc(100% + 32px);


  @media screen and (max-width: calc($headerbar-thin-breakpoint - 1px)) {
    min-width: 100%;
    margin-left: 0;
  }
}

.footer {
  position: absolute;
  margin-top: 100px;
  top: 0;
  min-width: 100%;


  @media screen and (max-width: calc($headerbar-thin-breakpoint - 1px)) {
    padding-top: 0px;
    padding-bottom: 0px;
  }

  &-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #000000;
    background-color: $c-primary-transparent;

    @media screen and (max-width: calc($headerbar-thin-breakpoint - 1px)) {
      border-radius: 0px;
      padding-bottom: 100px;
    }
  }

  &-main {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    justify-content: space-between;
    

    &-brand {
      display: flex;
      flex-direction: column;
      gap: 16px;

      &-logo {
        max-width: 256px;
      }

      & H1 {
        color: #000000;
        max-width: 60ch;
      }

      & p {
        color: #000000;
        max-width: 35ch;
        margin: 0px;
      }

      &-socials {
        display: flex;
        gap: 8px;
      }
    }

    &-links {
      display: flex;
      gap: 32px;
      padding: 0px 16px;
      flex-wrap: wrap;

      & h3 {
        color: #000000;
        margin: 0px;
      }

      & ul {
        margin: 0px;
        padding: 0px;
        padding-top: 8px;
        list-style-type: none;
      }

      & li {
        padding: 4px 0px;
      }
    }
  }

  &-divider {
    display: flex;
    width: 100%;
    padding: 16px 0px;

    &-line {
      content: "";
      background-color: $c-secondary;
      min-height: 2px;
      border-radius: 2px;
      width: 100%;
    }
  }

  &-bar {
    display: flex;
    align-items: center;
    color: $c-secondary;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;

    &-section {
      display: flex;
      align-items: center;
      gap: 16px;

      &-name {
        font-size: 0.9rem;
        color: $c-secondary;
        font-weight: 400;
      }

      & a {
        cursor: pointer;
        font-size: 0.9rem;
        color: $c-on-background;
        font-weight: 400;
      }
    }

  }
}
</style>