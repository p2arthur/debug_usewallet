<template>
  <svg style="width:24px;height:24px" fill="transparent" stroke="CurrentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
    <path 
      class="path"
      fill="transparent" 
      stroke="CurrentColor"
      d="M80 80 160 80 160 120 200 80 320 80 320 280 280 320 240 320 240 160 160 160 160 320 80 320 80 200 120 160 80 160 80 80"
      stroke-width="10"
      stroke-linecap="round"
      stroke-miterlimit="10" 
      stroke-dasharray="1400"
      stroke-dashoffset="1400"
    >
      <animate
        attributeName="stroke-dashoffset"
        values="1400;0;1400"
        dur="3s" 
        repeatCount="indefinite"
      />
    </path>
  </svg>
</template>