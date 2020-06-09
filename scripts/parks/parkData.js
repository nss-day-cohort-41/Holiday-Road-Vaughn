let parkData = []

const getParkData = () => {
    return fetch().then(
        (response) => {
            return response.json
        }
    )
    .then(
        parkData = response
    )
}

