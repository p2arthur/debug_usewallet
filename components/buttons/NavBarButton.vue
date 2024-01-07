<template>
  <router-link v-if="to" :to="to" :aria-label="name" class="nav-button" :class="`
      ${active ? 'nav-button-active' : ''}
    `">
    <slot></slot>
  </router-link>

  <button v-else :aria-label="name" class="nav-button" @click="$emit('click')" :class="`
      ${active ? 'nav-button-active' : ''}
    `">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">

defineProps({
  to: {
    required: false,
    type: String,
  },
  name: {
    required: false,
    type: String,
  },
  active: {
    required: false,
    type: Boolean,
    default: false
  },
  icon: {
    required: false,
    type: Boolean,
    default: false
  },
  text: {
    required: false,
    type: Boolean,
    default: true
  }
})

</script>

<style lang="scss">

@font-face {
    font-family: 'Helvetica Neue';
    src: url('/fonts/helvetica-neue/500.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}

.nav-button {
  flex-grow: 1;
  display: flex;
  align-items: center;
  margin: 0px;
  padding: 0px 8px;
  gap: 16px;
  height: 34px;
  border: none;
  border-radius: $radius-m;
  font-size: 1rem;
  font-weight: 500;
  outline: 2px solid;
  outline-color: transparent;
  background-color: transparent;
  color: $c-on-secondary !important;
  align-items: center;
  justify-content: center; 
  transition: outline-color 100ms ease, background-color 150ms ease, color 150ms ease;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  



  &:hover, &-active { // Aplica as mesmas regras para hover e active
    color: $c-secondary-transparent !important;

    & h4 { // Seleciona h4 para hover e active
      // font-size: 1.3rem; // Tamanho de fonte correspondente ao h3
      font-weight: 500;
      
    }

    & span {
      color: $c-secondary !important;
    }
  }

  & svg {
    height: 32px !important;
    width: 32px !important;
  }

  & span {
    transition: color 150ms ease;
    color: $c-on-primary !important;
  }

  &-active {
    color: $c-secondary !important;
    background-color: rgba(255, 255, 255, 0.06);
    border-radius: 20px;

    & span {
      
      color: $c-secondary !important;
    }
  }

  &-icon {
    padding: 0px 24px 0px 16px;
  }

  &-only-icon {
    padding: 0px 12px 0px 12px;
  }


  &:focus-visible {
    outline-color: $c-on-primary;
  }
}

.nav-button-different {
  background-color: #9e86ff;
  border-radius: 20px;
  height: 40px;
  width: 160px;
  align-items: center;
  justify-content: center; 

  &:hover {
    color: $c-on-detail-primary-transparent !important;
    background-color: #7b65d1 ;

    & span {
      color: $c-secondary !important;
    }

  }

}
</style>