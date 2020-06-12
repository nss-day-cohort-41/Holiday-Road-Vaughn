let forecastData = [];



const weatherProvider = (latNum, lonNum) => {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latNum}&lon=${lonNum}&units=imperial&exclude=minutely,hourly&appid=${keys.weatherKey}`).then(
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

//need a then statement 
//invoke weatherprovider inside then statment inside p

/*
new weather API url:
https://api.openweathermap.org/data/2.5/onecall?lat=44.30777545&lon=-68.30063316&exclude=minutely,hourly&appid=${keys.weatherKey}

old weather API url:
https://api.openweathermap.org/data/2.5/forecast?q=${zipCode},us&units=imperial&appid=${keys.weatherKey}


*/

/*
// backup of code to get lat and lon numbers

//finding lat and lon
                let latlon = parkData.data[0].latLong
                let [lat, lon] = latlon.split(",")
                //console.log("lattitude is", lat, "and longitude is", lon)
                let [latString, latNum] = lat.split(":")
                let [lonString, lonNum] = lon.split(":")
                console.log("The lattitude is", latNum)
                console.log("But the longitude is", lonNum)



//copy of code about to be altered in parkData...just in case
let parkDataSelector = document.querySelector(".park__list").addEventListener("change", e => {
    let target = e.target.value
    getParkData(target).then(
        (parkData) => {
            showParkData(parkData)
            return parkData
        }

    ).then(
        (parkData) => {
            let zipCode = parkData.data[0].addresses[0].postalCode
            weatherProvider(zipCode).then(
                () => {
                    weatherList()
                }
            )
            
        } 
        
        
    )
})




*/




