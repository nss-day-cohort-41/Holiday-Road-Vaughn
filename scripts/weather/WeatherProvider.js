let forecastData = [];




const weatherProvider = () => {
    return fetch("api.openweathermap.org/data/2.5/forecast?q=nashville,us&appid=966eca313637a957d5e07741624d8eea").then(
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