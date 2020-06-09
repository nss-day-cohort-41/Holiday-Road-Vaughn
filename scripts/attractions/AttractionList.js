/*
Responsible for generating a list of attraction HTML
representations, and putting in the browser
*/
import {myAttractions} from "./AttractionProvider.js"

const attractionList = () => {
  // Iterate the collection of attraction objects
  for (const currentAttractionObject of attractionProvider) {
    // Convert the current location to its HTML representation
    const attractionHTML= attractionConverter(currentAttractionObject);

    // Find the <article> element in index.html
    const contentTarget = attractionArticleElement = document.querySelector(".bizzaries__dropdown");

    const eventHub = document.querySelector(".dropdown_container")

    const bizzarieSelect = () => {

      const bizzarie = myBizzare()
    
      eventHub.addEventListener(
        "change",
        changeEvent => {
          if (changeEvent.target.id === "bizarrieSelect") {

            const bizzarie = myBizzarie

            const bizzarieId = changeEvent.target.value
          
            console.log(bizzarieId)

            const gotBizzarie = bizzarie.find(bizzar => {
              return bizzar.id === parseInt(bizzarieId, 10)

              eventHub.dispatchEvent(n)
            })
      
      

            // Put the location HTML representation inside the <article> element
            attractionArticleElement.innerHTML += attractionHTML;
        
          }


          /*
              This function will convert a single location object to an
              HTML representation and return it
          */
          const attractionConverter = (attractionObject) => {
            const attractionHTMLRepresentation = `<select name="attraction__list" id="">
    <option value="park">${attractionObject.businessName}</option>
</select>`;

            return attractionHTMLRepresentation;
          }
        }
