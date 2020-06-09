let attractions = []

const myBizzare = () => attractions

const getBizzare = () => {
    return fetch("http:holidayroad.nss.team/bizarreries")

        .then(response => response.json())
    
        .then((bizzarieArray) => {

            attractions = bizzarieArray
        
        })
}
