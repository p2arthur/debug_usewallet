export const useAnimationInterval = (ms: number, callback: Function) => {
  return useState('animationInterval', () => {
    onMounted(() => {

      // Prefer currentTime, as it'll better sync animtions queued in the 
      // same frame, but if it isn't supported, performance.now() is fine.
      let start: number
  
      if (process.client) {
        start = (document.timeline ? document.timeline.currentTime : performance.now()) || 0;
      } else {
        start = performance.now()
      }
  
      function frame(time: number) {
        if (controller.signal.aborted) return;
        callback(time);
        scheduleFrame(time);
      }
  
      function scheduleFrame(time: number) {
        const elapsed = time - start;
        const roundedElapsed = Math.round(elapsed / ms) * ms;
        const targetNext = start + roundedElapsed + ms;
        const delay = targetNext - performance.now();
        setTimeout(() => requestAnimationFrame(frame), delay);
      }
  
      const controller = new AbortController();
      scheduleFrame(start);

      return controller
    })
  })
}