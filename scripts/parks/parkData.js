
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
            (arrayOfParks) => {
              parkData = arrayOfParks
              return parkData
        }
    )
}

document.querySelector(".park__list").addEventListener("change", e=>{
   let target =e.target.value
         getParkData(target).then()
         console.log(target, "get target data")
    })



