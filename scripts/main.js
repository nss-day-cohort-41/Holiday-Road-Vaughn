weatherProvider().then(() => {
  weatherList();
});
showParkDropDown()


weatherProvider().then(
    () => {
        weatherList()
        
        
    }
)

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

