
//storage for the call
let parkData = []
//fetch call from NPS
const getParkData = () => {
    return fetch(`{}`).then(
        (response) => {
            return response.json
        }
    )
        .then(
            (arrayOfParks) => {
              parkData = arrayOfParks
        }
    )
}

