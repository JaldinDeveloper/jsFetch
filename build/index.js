"use strict";

var _loadCities = require("./utils/loadCities.js");
//const title = document.getElementById("title");
//const {loadCities} = require('./utils/loadCities');

// function timeout(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
//import {loadCities} from './utils/loadCities.js';
const group = document.getElementById('cities-list');
//group.replaceChild()
group.replaceWith((0, _loadCities.loadCities)());