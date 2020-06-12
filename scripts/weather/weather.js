const unixToHuman = (unix) => {
    const day = new Date(unix*1000)
    return day
}


const weatherConverter = (weatherObject) => {

    const weatherHTMLRepresentation = `
                <ul>
                    <li>${unixToHuman(weatherObject.dt)}</li>
                    <li>Low: ${weatherObject.temp.min} F</li>
                    <li> high: ${weatherObject.temp.max} F</li>
                    <li>${weatherObject.weather[0].main}</li>
                    <li>humidity: ${weatherObject.humidity}%</li>
                    
                </ul>`

    return weatherHTMLRepresentation

}

const weatherTarget = document.querySelector(".weather__forecast")
const clearWeather = () => weatherTarget.innerHTML = ""