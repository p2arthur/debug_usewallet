import { defineNuxtPlugin } from '#app'
// import algosdk from 'algosdk'

export default defineNuxtPlugin(async () => {
  
  if (typeof window !== "undefined") {
    // Pollyfill for Buffer
    (window as any).global = window;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    window.Buffer = window.Buffer || (await import('buffer')).Buffer;
  }

  return {
    provide: {
      algosdk: await import('algosdk')
    }
  }
})