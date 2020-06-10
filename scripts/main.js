weatherProvider().then(() => {
  weatherList();
});

getEateries().then(() => {
  //console.log("inside", eateryData)
  eateryList();
});

//console.log("outside", eateryData)

<<<<<<< HEAD
getAttractions().then(() => {
  attractionList();
});
getParkData().then(() => {
  showParkData();
});




=======
getAttractions().then(
    () => {
        attractionList()
    }
)
getParkData().then(
    () => {
        showParkData()
    }
)
>>>>>>> master
