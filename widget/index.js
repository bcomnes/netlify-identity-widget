import netlifyIdentity from "../dist/index.js";

if (typeof exports !== undefined) {
  exports.netlifyIdentity = netlifyIdentity;
}
if (typeof window !== undefined) {
  window.netlifyIdentity = netlifyIdentity;
}

document.addEventListener("DOMContentLoaded", () => {
  netlifyIdentity.init();
});
