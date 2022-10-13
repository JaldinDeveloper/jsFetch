"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadCities = loadCities;
var _renderWeather = require("./renderWeather.js");
// const { renderWeather } = require('./renderWeather');

function loadCities(cities, doc) {
  //PASARLE EL DOCUMENT 

  // const citiesList = document.createElement('ul');
  //citiesList.className = "dropdown-menu";
  //citiesList.id = 'cities-list';
  const citiesList = doc.getElementById('cities-list');
  cities.forEach(city => {
    const liChild = doc.createElement("li");
    const aChild = doc.createElement("a");
    aChild.classList.add("dropdown-item");
    aChild.textContent = city.city;
    aChild.onclick = event => {
      (0, _renderWeather.renderWeather)(city.lat, city.long, doc);
    };
    aChild.id = city.id;
    liChild.appendChild(aChild);
    citiesList.appendChild(liChild);
  });
  //return citiesList;
}
;

// module.exports = {loadCities};