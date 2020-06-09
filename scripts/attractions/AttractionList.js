/*
Responsible for generating a list of attraction HTML
representations, and putting in the browser
*/
// import {myAttractions} from"./AttractionProvider.js"

const attractionList = () => {
  // Iterate the collection of attraction objects
  for (const currentAttractionObject of attractionData) {
    // Convert the current location to its HTML representation
    const attractionHTML= attractionConverter(currentAttractionObject);

    // Find the <article> element in index.html
    const attractionArticleElement = document.querySelector(".bizzaries__dropdown");

    // Put the location HTML representation inside the <article> element
    attractionArticleElement.innerHTML += attractionsHTML;
  }
};

/*
    This function will convert a single location object to an
    HTML representation and return it
*/
const attractionConverter = (attractionObject) => {
  const attractionHTMLRepresentation = `<select name="attractions__list" id="">
    <option value="park">${attractionObject.businessName}</option>
</select>`;

  return attractionHTMLRepresentation;
};
