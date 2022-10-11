
const LINK = "api.openweathermap.org/data/2.5/weather?";
const KEY = "5bcb14e4112b3edf06ab910aaff0768a";
const KELVIN = 273;


const temperatureHtml = document.getElementById("temperature");
const descriptionHtml = document.getElementById("description");
const cityHtml = document.getElementById("city");
const countryHtml = document.getElementById("country");
const iconImg = document.getElementById("icon");
const loader = document.getElementById("loader");
// const loading_container = document.getElementById("loading-container");
// const information = document.getElementById("information");

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

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWeatherData(lat, lon){
    try {
        const CONNECTION_STRING = `https://${LINK}lat=${lat}&lon=${lon}&appid=${KEY}`;
        const promise = await fetch(CONNECTION_STRING);
        return await promise.json();
    } catch (error) {
        console.log(error);
    }
    
}

function loadCities() { 
    let citiesList = document.getElementById("cities-list");
    cities.forEach((city) => {
        const liChild = document.createElement("li");
        const aChild = document.createElement("a");
        aChild.classList.add("dropdown-item");
        aChild.textContent = city.city;
        aChild.onclick = (event) => { renderWeather(city.lat,city.long);};
        aChild.target = "_blank";
        liChild.appendChild(aChild);
        citiesList.appendChild(liChild);
    });
};

async function loadingAnimation(){
    loader.style.visibility = "visible";
    await timeout(2000);
    loader.style.visibility = "hidden";
}

async function renderWeather(lat, lon) {
    try {
        const res = await fetchWeatherData(lat, lon);
        await loadingAnimation();

        temperatureHtml.textContent = Math.floor(res.main.temp - KELVIN)+" °C";
        descriptionHtml.textContent = res.weather[0].description;
        cityHtml.textContent = res.name;
        countryHtml.textContent = res.sys.country;
        iconImg.innerHTML = `<img src="icons/${res.weather[0].icon}.png"/>`;

    } catch (error) {
        console.log(error);
    }
}

loadCities();