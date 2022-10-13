"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadingAnimation = loadingAnimation;
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function loadingAnimation(doc) {
  const loader = doc.getElementById("loader");
  loader.style.visibility = "visible";
  await timeout(2000);
  loader.style.visibility = "hidden";
}

// module.exports = { loadingAnimation};