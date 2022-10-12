// const { loadingAnimation} = require('./loadingAnimation');
import { loadingAnimation } from './loadingAnimation.js';
import {fetchWeatherData} from './fetchWeather.js';
export async function renderWeather(lat, lon, doc) {
    try {
        const temperatureHtml = doc.getElementById("temperature");
        const descriptionHtml = doc.getElementById("description");
        const cityHtml = doc.getElementById("city");
        const countryHtml = doc.getElementById("country");
        const iconImg = doc.getElementById("icon");

        const KELVIN = 273;
        const res = await fetchWeatherData(lat, lon);
        await loadingAnimation(doc);

        temperatureHtml.textContent = Math.floor(res.main.temp - KELVIN)+" °C";
        descriptionHtml.textContent = res.weather[0].description;
        cityHtml.textContent = res.name;
        countryHtml.textContent = res.sys.country;
        iconImg.innerHTML = `<img src="icons/${res.weather[0].icon}.png"/>`;
        
    } catch (error) {
        console.log(error);
    }
}

// module.exports = { renderWeather};