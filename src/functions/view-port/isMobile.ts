export function isMobile() {
  // Check if 'window' is defined
  if (typeof window !== 'undefined') {
    return window.innerWidth < 768;
  } else {
    return false;
  }
}
