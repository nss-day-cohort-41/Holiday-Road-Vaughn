
showParkDropDown()


getEateries().then(
    () => {
        eateryList()
    }
)

getAttractions().then(
    () => {
        attractionList()
    }
)
