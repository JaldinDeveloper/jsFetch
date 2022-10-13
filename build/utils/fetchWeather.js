"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchWeatherData = fetchWeatherData;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const fetchP = Promise.resolve().then(() => _interopRequireWildcard(require('node-fetch'))).then(mod => mod.default);
const fetch = (...args) => fetchP.then(fn => fn(...args));
// const fetch = require("node-fetch");
async function fetchWeatherData(lat, lon) {
  try {
    const LINK = "api.openweathermap.org/data/2.5/weather?";
    const KEY = "5bcb14e4112b3edf06ab910aaff0768a";
    const CONNECTION_STRING = `https://${LINK}lat=${lat}&lon=${lon}&appid=${KEY}`;
    const promise = await fetch(CONNECTION_STRING);
    return await promise.json();
  } catch (error) {
    console.log(error);
  }
}

// module.exports = {fetchWeatherData};