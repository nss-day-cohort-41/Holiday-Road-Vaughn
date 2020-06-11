
//storage for the call
let parkData = [];
const clearParkData = () => contentTarget.innerHTML = ""

//fetch call from NPS
const getParkData = (codes) => {
    return fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${codes}&api_key=${keys.npsKey}`).then(
        (response) => {
            return response.json()
        }
    )
        .then(
            (objOfData) => {
                parkData = objOfData
                return parkData
            }
        )
}

let parkDataSelector = document.querySelector(".park__list").addEventListener("change", e=>{
   let target =e.target.value
   clearParkData(target)
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
