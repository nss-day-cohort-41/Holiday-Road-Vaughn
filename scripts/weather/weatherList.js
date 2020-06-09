const weatherList = () => {
    // Iterate the collection of fish objects
    for (const currentWeatherObject of forecastData.list) {

        // Convert the current fish to its HTML representation
        const weatherHTML = weatherConverter(currentWeatherObject)

        // Find the <article> element in index.html
        const weatherArticleElement = document.querySelector(".current_weather")

        // Put the fish HTML representation inside the <article> element
        weatherArticleElement.innerHTML += weatherHTML
    }
}