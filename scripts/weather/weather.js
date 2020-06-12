const weatherConverter = (weatherObject) => {

    const weatherHTMLRepresentation = `
                <ul>
                    <li>Currently: ${forecastData.current.temp} F with ${forecastData.current.weather[0].main}</li>
                    <li>Low: ${weatherObject.temp.min} F</li>
                    <li> high: ${weatherObject.temp.max} F</li>
                    <li>${weatherObject.weather[0].main}</li>
                    <li>humidity: ${weatherObject.humidity}%</li>
                    
                </ul>`

    return weatherHTMLRepresentation

}


/*
//put these back in html later


*/