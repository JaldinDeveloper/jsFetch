// const { renderWeather } = require('./renderWeather');
import { renderWeather } from './renderWeather.js';
export function loadCities(cities,doc) { 
    //PASARLE EL DOCUMENT 
    
    // const citiesList = document.createElement('ul');
    //citiesList.className = "dropdown-menu";
    //citiesList.id = 'cities-list';
    const citiesList = doc.getElementById('cities-list');
    cities.forEach((city) => {
        const liChild = doc.createElement("li");
        const aChild = doc.createElement("a");
        aChild.classList.add("dropdown-item");
        aChild.textContent = city.city;
        aChild.onclick = (event) => { renderWeather(city.lat,city.long,doc);};
        aChild.id = city.id;
        liChild.appendChild(aChild);
        citiesList.appendChild(liChild);
    });
    //return citiesList;
};

// module.exports = {loadCities};