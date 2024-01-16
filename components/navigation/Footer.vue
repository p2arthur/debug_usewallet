<!-- @format -->

<template>
  <footer class="footer">
    <div class="footer-main-container">
      <div class="footer-main">
        <img
          class="footer-logo"
          src="/img/rxelms_logo.png"
          alt="Logo Rxelms" />
        <p class="footer-description">
          The mission of Rxlems is to create a metaverse, which is an innovative
          virtual environment where players can explore, collaborate, and
          connect in a decentralized and sustainable digital world.
        </p>
        <div class="footer-socials">
          <a
            class="footer-main-brand-socials-link"
            target="_blank"
            href="https://twitter.com/_Dartroom">
            <IconsTwitter />
          </a>

          <a
            class="footer-main-brand-socials-link"
            target="_blank"
            href="https://www.instagram.com/dartroom.xyz/">
            <IconsInstagram />
          </a>

          <a
            class="footer-main-brand-socials-link"
            target="_blank"
            href="https://discord.gg/J8YStrMZAt">
            <IconsDiscord />
          </a>
        </div>
      </div>

      <div class="footer-main-links">
        <div
          v-for="section in navigation"
          class="footer-main-links-section">
          <h3>{{ section.section }}</h3>
          <ul class="footer-links-list">
            <li
              class="footer-links-item"
              v-for="link in section.links">
              <a :href="link.link">{{ link.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bar">
      <p class="footer-bar-text">
        © 2022-{{ currentYear }} Dartroom Ltd. (UK) - Company House 13974043
      </p>
    </div>
  </footer>

  <div class="spline-container"></div>
</template>

<script setup lang="ts">
  const currentYear = new Date().getFullYear();

  const navigation = [
    {
      section: 'Marketplace',
      links: [
        {
          name: 'Link 1',
          link: '/',
        },
        {
          name: 'Link 2',
          link: '/',
        },
      ],
    },

    {
      section: 'Company',
      links: [
        {
          name: 'Link 1',
          link: '/',
        },
        {
          name: 'Link 2',
          link: '/',
        },
      ],
    },
  ];
</script>

<style scoped lang="scss">
  .footer {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: rgb(14, 10, 30);
    top: 0;
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

  .footer-links-list {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    list-style-type: none;
    padding-inline-start: 0;
  }
  .footer-main-links {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    width: 50%;

    h3 {
      margin: 0px;
    }
  }

  .footer-links-item {
    display: flex;
    justify-content: center;
    color: white;
  }

  .footer-bar {
    display: flex;
    justify-content: center;
    color: white;
  }

  .footer-bar-text {
    color: rgb(174, 174, 174);
    text-align: center;
  }

  .spline-container {
    width: 100%;
    height: 100%;
    background-color: black;
  }

  @media (max-width: 768px) {
    .footer-main-container {
      flex-direction: column;
    }

    .footer-main-container {
      display: flex;
      gap: 30px;
    }

    .footer-main {
      align-items: center;
      flex-direction: column;
      width: 100%;
      text-align: center;
    }

    .footer-main-links {
      justify-content: center;
      width: 100%;

      h3 {
        font-size: 1rem;
        margin: 0px;
      }
    }

    .footer-description {
      width: 100%;
      font-size: 16px;
    }
  }
</style>
