let attractionData = []


 const getAttractions = () => {
    return fetch("http://holidayroad.nss.team/bizarreries").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
        .then(
            (arrayOfAttractions) => {
                attractionData = arrayOfAttractions
            }
        )



}
