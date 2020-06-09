getEateries().then(
    () => {
        console.log("inside", eateryData)
        eateryList()
    }
)
console.log("outside", eateryData)