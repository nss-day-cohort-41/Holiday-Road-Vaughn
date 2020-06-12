let forecastData = [];



const weatherProvider = (latNum, lonNum) => {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latNum}&lon=${lonNum}&units=imperial&exclude=minutely,hourly&appid=${keys.weatherKey}`).then(
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





