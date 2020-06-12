const weatherList = () => {
    
    for (const currentWeatherObject of forecastData.daily) {

        const weatherHTML = weatherConverter(currentWeatherObject)

        const weatherArticleElement = document.querySelector(".current_weather")

        weatherArticleElement.innerHTML += weatherHTML
    }
}