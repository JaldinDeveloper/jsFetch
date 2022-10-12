//const title = document.getElementById("title");
//const {loadCities} = require('./utils/loadCities');
import {loadCities} from './utils/loadCities.js';
// function timeout(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
//import {loadCities} from './utils/loadCities.js';

//group.replaceChild()



const citiesList = document.getElementById('cities-list');
const cities = [
    {
        id: 1,
        city: "Santa Cruz",
        lat: "-17.8",
        long: "-63.1667"
    },
    {
        id: 2,
        city: "La Paz",
        lat: "-16.5",
        long: "-68.15"
    },
    {
        id: 3,
        city: "Cochabamba",
        lat: "-17.3895",
        long: "-66.1568"
    },
    {
        id: 4,
        city: "Oruro",
        lat: "-17.9833",
        long: "-67.15"
    },
    {
        id: 5,
        city: "Potosi",
        lat: "-19.5836",
        long: "-65.7531"
    },
    {
        id: 6,
        city: "Sucre",
        lat: "-19.0333",
        long: "-65.2627"
    },
    {
        id: 7,
        city: "Beni",
        lat: "-14",
        long: "-65.5"
    },
    {
        id: 8,
        city: "Tarija",
        lat: "-21.5",
        long: "-64"
    },
    {
        id: 9,
        city: "Pando",
        lat: "-11.3333",
        long: "-67.6667"
    },
    {
        id: 10,
        city: "Ushuaia",
        lat: "-54.8",
        long: "-68.3"
    },
];



loadCities(cities, document);
//group.replaceWith(loadCities());