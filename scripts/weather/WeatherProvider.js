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

/*
new weather API url:
https://api.openweathermap.org/data/2.5/onecall?lat=44.30777545&lon=-68.30063316&
exclude=current&appid=${keys.weatherKey}

old weather API url:
https://api.openweathermap.org/data/2.5/forecast?q=${zipCode},us&units=imperial&appid=${keys.weatherKey}


*/