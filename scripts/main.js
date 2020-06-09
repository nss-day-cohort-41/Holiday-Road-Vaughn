getEateries().then(
    () => {
        console.log("inside", eateryData)
        eateryList()
    }
)
console.log("outside", eateryData)

getParks().then(
    () => {
        console.log("inside", parkData)
        showParkData()
    }
)
console.log("outside", parkData)