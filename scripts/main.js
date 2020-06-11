weatherProvider().then(
    () => {
        weatherList()
        
        
    }
)

getEateries().then(
    () => {
        //console.log("inside", eateryData)
        eateryList()
    }
)

//console.log("outside", eateryData)

getAttractions().then(
    () => {
        attractionList()
    }
)
getParkData().then(
    () => {
        showParkData()
        //Brendan here.  Below should extract park object
       // parkDataListforZip()
        //console.log(theZipCodeForThePark)
        //console.log("hello!!!", target)
        
        
    }
)

