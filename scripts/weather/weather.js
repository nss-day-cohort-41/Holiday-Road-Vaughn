const weatherConverter = (weatherObject) => {

    const weatherHTMLRepresentation = `
                <ul>
                    <li>Currently: ${forecastData.current.temp}</li>
                    <li>date: ${weatherObject.dt}</li>
                    <li>Low: ${weatherObject} F</li>
                    <li> high: ${weatherObject} F</li>
                    <li>${weatherObject}</li>
                    <li>humidity: ${weatherObject}%</li>
                    
                </ul>`

    return weatherHTMLRepresentation

}


/*
//put these back in html later


*/