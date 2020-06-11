showParkDropDown()


weatherProvider().then(
    () => {
        weatherList()
        
        
    }
)

getEateries().then(
    () => {
        //console.log("inside", eateryData)
        showEateryList()
    }
)

//console.log("outside", eateryData)

getAttractions().then(
    () => {
        attractionList()
    }
)

