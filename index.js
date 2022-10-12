//const title = document.getElementById("title");
//const {loadCities} = require('./utils/loadCities');
import {loadCities} from './utils/loadCities';
// function timeout(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
//import {loadCities} from './utils/loadCities.js';
const group = document.getElementById('cities-list');
//group.replaceChild()
group.replaceWith(loadCities());