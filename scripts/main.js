import keys from "./Settings.js"

//import api from “./settings.js”





getAttractions().then(() => {
  console.log("inside", attractionProvider);
  attractionList();
});
console.log("outside", attractionProvider);


getEateries().then(
    () => {
        console.log("inside", eateryData)
        eateryList()
    }
)
console.log("outside", eateryData)



getDirection().then(
    () => {
        //console.log("inside", directionData)
        directionList()
    }
)
//console.log("outside", directionData)
