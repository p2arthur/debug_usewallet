export const openUrl = (url: string) => {
  if (url) {
    window.open(url, '_blank');
  }
};
