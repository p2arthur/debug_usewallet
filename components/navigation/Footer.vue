<!-- @format -->

<template>
  <footer class="footer">
    <div class="footer-main-container">
      <div class="footer-main">
        <img class="footer-logo" src="/img/rxelms_logo.png" alt="Logo Rxelms" />
        <p class="footer-description">
          The mission of Rxlems is to create a metaverse, which is an innovative virtual
          environment where players can explore, collaborate, and connect in a
          decentralized and sustainable digital world.
        </p>
        <div class="footer-socials">
          <a
            class="footer-main-brand-socials-link"
            target="_blank"
            href="https://twitter.com/_Dartroom"
          >
            <IconsTwitter />
          </a>

          <a
            class="footer-main-brand-socials-link"
            target="_blank"
            href="https://www.instagram.com/dartroom.xyz/"
          >
            <IconsInstagram />
          </a>

          <a
            class="footer-main-brand-socials-link"
            target="_blank"
            href="https://discord.gg/J8YStrMZAt"
          >
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
    <div class="footer-bar">
      <span class="footer-bar-section-name"
        >© 2022-{{ currentYear }} Dartroom Ltd. (UK) - Company House 13974043</span
      >
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();

const navigation = [
  {
    section: "Marketplace",
    links: [
      {
        name: "Link 1",
        link: "/",
      },
      {
        name: "Link 2",
        link: "/",
      },
    ],
  },
  {
    section: "My Account",
    links: [
      {
        name: "Link 1",
        link: "/",
      },
      {
        name: "Link 2",
        link: "/",
      },
    ],
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
        link: "/",
      },
      {
        name: "Link 2",
        link: "/",
      },
    ],
  },
];
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  background-color: rgb(14, 10, 30);
  top: 0;
  min-width: 100%;
  padding: 10px;
}

.footer-main-container {
  display: flex;
  justify-content: space-between;
}

.footer-main {
  display: flex;
  align-items: start;
  flex-direction: column;
  width: 50%;
}

.footer-logo {
  width: 10rem;
}

.footer-description {
  width: 400px;
  color: rgb(174, 174, 174);
}

.footer-socials {
  display: flex;
  gap: 10px;
}

.footer-main-links {
  display: flex;
  justify-content: end;
  gap: 20px;
  width: 50%;
  padding: 0 20px;

  h3 {
    margin: 0px;
  }
}

.footer-bar {
  display: flex;
  justify-content: center;
}
</style>
