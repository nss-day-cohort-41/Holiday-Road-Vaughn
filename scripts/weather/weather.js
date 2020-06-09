const weatherConverter = (WeatherObject) => {

    const weatherHTMLRepresentation = `
        
        <div class="fish__details">
            <ul>
                <li>Species: ${weatherObject.weather.wind}</li>
            </ul>
        </div>`

    return weatherHTMLRepresentation

}