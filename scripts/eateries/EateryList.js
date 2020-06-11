
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

    const eateryHTMLRepresentation = `
    <option value="eatery">${eateryObject.businessName}</option>`

    return eateryHTMLRepresentation

} 
//var select = document.getElementsByClassName(".eateries__dropdown");
//var result = eateryConverter
//alert(result);

const displayDetails = () => {
    const detailHTMLRepresentation = `
    alert("${eateryObject.description})`

    return detailHTMLRepresentation
}     


const eateryDetailsButton = document.querySelector(".eateries__dropdown")

eateryDetailsButton.addEventListener("change", (changeEvent) => {
    const userChoice = changeEvent.target.value

    if (userChoice == `${eateryData.businessName}`) {
        displayDetails();
    }
})

