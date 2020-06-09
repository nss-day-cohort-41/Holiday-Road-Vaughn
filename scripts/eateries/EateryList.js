
/*
Responsible for generating a list of eatery HTML
representations, and putting in the browser
*/
// import {myEateries} from"./EateryProvider.js"

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