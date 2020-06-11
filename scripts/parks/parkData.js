
//storage for the call
let parkData = [];

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
   getParkData(target).then(
    (parkData) => {
        showParkData(parkData)
    }
 
         )
    })
