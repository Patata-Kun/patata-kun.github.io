const setFavicon = (href) => {
  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.href = href;
};
const updateFavicon = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setFavicon('images/SVG/favicon.svg');
  } else {
    setFavicon('images/SVG/favicon-dark.svg');
  }
};
updateFavicon();
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);