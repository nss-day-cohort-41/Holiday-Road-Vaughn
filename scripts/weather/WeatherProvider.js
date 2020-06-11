let forecastData = [];



const weatherProvider = (zipCode) => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${zipCode},us&units=imperial&appid=${keys.weatherKey}`).then(
        (response) => {
            return response.json()
        }
    )
    .then(
        (arrayOfWeather) => {
            forecastData = arrayOfWeather
        }
    )
}

//need a then statement 
//invoke weatherprovider inside then statment inside p