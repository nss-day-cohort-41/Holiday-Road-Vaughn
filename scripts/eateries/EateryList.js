
/*
Responsible for generating a list of eatery HTML
representations, and putting in the browser
*/
const eateryList = () => {
    // Iterate the collection of eatery objects
    for (const currentEateryObject of eateryData) {

        // Convert the current location to its HTML representation
        const eateryHTML = eateryConverter(currentEateryObject)

        // Find the <article> element in index.html
        const eateryArticleElement = document.querySelector(".eateries__dropdown")

        // Put the location HTML representation inside the <article> element
        eateryArticleElement.innerHTML += eateryHTML
    }
}


/*
    This function will convert a single location object to an
    HTML representation and return it
*/
const eateryConverter = (eateryObject) => {

    const eateryHTMLRepresentation = `<select name="eateries__list" id="">
    <option value="park">${eateryObject.businessName}</option>
</select>`

    return eateryHTMLRepresentation

} 
/* playing with this to get the details button to populate

const eateryDetailsButton = document.querySelector(".show__eatery__details")

eateryDetailsButton.addEventListener("change", (changeEvent) => {
    const userChoice = changeEvent.target.value

    if (userChoice == `${eateryObject.businessName}`) {
        displayDetails();
    }
})

const displayDetails = () => {
    const details = eateryDetails()

    for (const detailsObject of details) {
        const eateryDetailsHTMLRepresentation = detailConverter(detailsObject)

        const eateryArticleElement.innerHTML = document.querySelector("")
    }

     


}
*/