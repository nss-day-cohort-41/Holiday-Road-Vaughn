const weatherList = () => {
    // Iterate the collection of fish objects
    for (const currentWeatherObject of forecastData) {

        // Convert the current fish to its HTML representation
        const weatherHTML = weatherConverter(currentWeatherObject)

        // Find the <article> element in index.html
        const fishArticleElement = document.querySelector(".fishList")

        // Put the fish HTML representation inside the <article> element
        fishArticleElement.innerHTML += weatherHTML
    }
}