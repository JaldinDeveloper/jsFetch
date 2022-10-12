"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadCities = loadCities;
var _renderWeather = require("./renderWeather.js");
// const { renderWeather } = require('./renderWeather');

function loadCities() {
  const cities = [{
    id: 1,
    city: "Santa Cruz",
    lat: "-17.8",
    long: "-63.1667"
  }, {
    id: 2,
    city: "La Paz",
    lat: "-16.5",
    long: "-68.15"
  }, {
    id: 3,
    city: "Cochabamba",
    lat: "-17.3895",
    long: "-66.1568"
  }, {
    id: 4,
    city: "Oruro",
    lat: "-17.9833",
    long: "-67.15"
  }, {
    id: 5,
    city: "Potosi",
    lat: "-19.5836",
    long: "-65.7531"
  }, {
    id: 6,
    city: "Sucre",
    lat: "-19.0333",
    long: "-65.2627"
  }, {
    id: 7,
    city: "Beni",
    lat: "-14",
    long: "-65.5"
  }, {
    id: 8,
    city: "Tarija",
    lat: "-21.5",
    long: "-64"
  }, {
    id: 9,
    city: "Pando",
    lat: "-11.3333",
    long: "-67.6667"
  }, {
    id: 10,
    city: "Ushuaia",
    lat: "-54.8",
    long: "-68.3"
  }];
  const citiesList = document.createElement('ul');
  citiesList.className = "dropdown-menu";
  citiesList.id = 'cities-list';
  cities.forEach(city => {
    const liChild = document.createElement("li");
    const aChild = document.createElement("a");
    aChild.classList.add("dropdown-item");
    aChild.textContent = city.city;
    aChild.onclick = event => {
      (0, _renderWeather.renderWeather)(city.lat, city.long);
    };
    liChild.appendChild(aChild);
    citiesList.appendChild(liChild);
  });
  return citiesList;
}
;

// module.exports = {loadCities};