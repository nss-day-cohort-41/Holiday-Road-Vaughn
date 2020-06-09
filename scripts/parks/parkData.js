
//storage for the call
let parkData = []
//fetch call from NPS
const getParkData = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?q=Park&api_key=${keys.npsKey}`).then(
        (response) => {
            return response.json()
        }
    )
        .then(
            (arrayOfParks) => {
              parkData = arrayOfParks
        }
    )
}

