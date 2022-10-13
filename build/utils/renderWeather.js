"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderWeather = renderWeather;
var _loadingAnimation = require("./loadingAnimation.js");
var _fetchWeather = require("./fetchWeather.js");
// const { loadingAnimation} = require('./loadingAnimation');

async function renderWeather(lat, lon, doc) {
  try {
    const temperatureHtml = doc.getElementById("temperature");
    const descriptionHtml = doc.getElementById("description");
    const cityHtml = doc.getElementById("city");
    const countryHtml = doc.getElementById("country");
    const iconImg = doc.getElementById("icon");
    const KELVIN = 273;
    const res = await (0, _fetchWeather.fetchWeatherData)(lat, lon);
    await (0, _loadingAnimation.loadingAnimation)(doc);
    temperatureHtml.textContent = Math.floor(res.main.temp - KELVIN) + " °C";
    descriptionHtml.textContent = res.weather[0].description;
    cityHtml.textContent = res.name;
    countryHtml.textContent = res.sys.country;
    iconImg.innerHTML = `<img src="icons/${res.weather[0].icon}.png"/>`;
  } catch (error) {
    console.log(error);
  }
}

// module.exports = { renderWeather};