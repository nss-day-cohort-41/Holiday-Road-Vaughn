const weatherList = () => {
    
    for (const currentWeatherObject of forecastData.daily) {

        const weatherHTML = weatherConverter(currentWeatherObject)

        const weatherArticleElement = document.querySelector(".current_weather")

        weatherArticleElement.innerHTML += weatherHTML
    }
}
//set a new querySelector to display current weather only once...tomorrow

const currnetWeatherList = () => {
    const currentWeatherHTML = `<h3>Currently: ${forecastData.current.temp} F with ${forecastData.current.weather[0].main}. Seven Day Forecast:</h3>`
    const currentWeatherArticle = document.querySelector(".current_weather")
    currentWeatherArticle.innerHTML = currentWeatherHTML
}