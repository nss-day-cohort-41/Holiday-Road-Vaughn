let eateryData = []


 const getEateries = () => {
    return fetch("http://holidayroad.nss.team/eateries").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
        .then(
            (arrayOfEateries) => {
                eateryData = arrayOfEateries
            }
        )



}


