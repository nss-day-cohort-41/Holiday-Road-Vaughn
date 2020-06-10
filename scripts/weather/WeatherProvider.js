let forecastData = [];



const weatherProvider = () => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=37216,us&units=imperial&appid=${keys.weatherKey}`).then(
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