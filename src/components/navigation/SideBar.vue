<!-- @format -->

<!-- Sidebar.vue -->

<template>
  <div class="sidebar-container">
    <div
      @click="toggleSideBar"
      class="sidebar-backdrop"></div>
    <nav
      class="sidebar-nav"
      :class="{ open: sideBarIsOpen }">
      <div class="sidebar-header">
        <img
          class="sidebar-logo"
          src="/img/rxelms_logo.png"
          alt="rxelms-logo" />
        <XCircleIcon
          @click="toggleSideBar"
          class="sidebar-close-icon" />
      </div>
      <ul class="sidebar-links">
        <li
          v-for="link in sidebarLinks"
          :key="link.label"
          class="sidebar-link">
          <router-link
            :to="link.path"
            @click="toggleSideBar"
            >{{ link.label }}</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
  import { useSidebarStore } from '../../stores/interface/sidebar.store';
  import { XCircleIcon } from '@heroicons/vue/24/solid';
  const { sidebarLinks, sideBarIsOpen, toggleSideBar } = useSidebarStore();
</script>

<style scoped>
  .sidebar-container {
    position: fixed;
    z-index: 100;
  }

  .sidebar-nav {
    right: 0;
    position: fixed;
    width: 50%;
    height: 100vh;
    background-color: rgb(19, 17, 33);
  }

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    height: 5%;
    .sidebar-logo {
      height: 80%;
    }

    .sidebar-close-icon {
      color: white;
      height: 50%;
      cursor: pointer;
    }
  }

  .sidebar-links {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .sidebar-link {
    padding: 10px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .sidebar-link a {
    color: #fff;
    text-decoration: none;
    font-size: 14px;
  }

  .sidebar-link:hover {
    background-color: rgb(179, 108, 255);
  }

  .sidebar-backdrop {
    position: fixed;
    display: flex;
    justify-content: flex-end;
    background-color: black;
    opacity: 20%;
    width: 100%;
    height: 100vh;
  }
</style>
