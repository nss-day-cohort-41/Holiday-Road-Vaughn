
/* responsible for making a list of park html representations
and putting them into the browser */
//import 



const showParkData = (parkData) => {
    //iterate the collection of park objects
    for (const currentParkObject of parkData) {
        //convert the current obj to its html
        const parkHTML = parkConverter(currentParkObject)
        // find the <article> element in index.html
        const parkArticleElement = document.querySelector(".park__list")
        //put the location html representation inside the <article> element
        parkArticleElement.innerHTML += parkHTML
    }
}

/* This function will convert a single location object to a HTML representation 
and return it */

const parkConverter = (parkObject) => {
    const parkHTMLRepresentation = `
    <select name = "park__list" id="">
        <option value="park">${parkObject.fullName}</option>
    </select>
    `
    return parkHTMLRepresentation;
}