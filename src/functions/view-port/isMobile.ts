export function isMobile() {
  // Check if 'window' is defined
  if (typeof window !== 'undefined') {
    console.log('window.in', window.innerWidth);
    return window.innerWidth < 768;
  } else {
    return false;
  }
}
