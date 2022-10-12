
export async function fetchWeatherData(lat, lon){
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