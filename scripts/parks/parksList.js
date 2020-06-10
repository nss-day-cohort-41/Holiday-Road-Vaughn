
/* responsible for making a list of park html representations
and putting them into the browser */
//import 



const showParkData = () => {
    //iterate the collection of park objects
    for (const key in codes) {
        //convert the current obj to its html
        const parkHTML = parkConverter(key,codes[key])
        // find the <article> element in index.html
        const parkArticleElement = document.querySelector(".park__list")
        //put the location html representation inside the <article> element
        parkArticleElement.innerHTML += parkHTML
    }
}

/* This function will convert a single location object to a HTML representation 
and return it to the selector box */

const parkConverter = (parkObject, codes) => {

    const parkHTMLRepresentation = `
        <option class="park" value=${parkObject}>${codes}</option>
    `
    
    return parkHTMLRepresentation;
}