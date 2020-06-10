const weatherConverter = (weatherObject) => {

    const weatherHTMLRepresentation = `
                <ul>
                    <li>date: ${weatherObject.dt_txt}</li>
                    <li>Low: ${weatherObject.main.temp_min} F</li>
                    <li> high: ${weatherObject.main.temp_max} F</li>
                    <li>${weatherObject.weather[0].description}</li>
                    <li>humidity: ${weatherObject.main.humidity}%</li>
                </ul>`

    return weatherHTMLRepresentation

}