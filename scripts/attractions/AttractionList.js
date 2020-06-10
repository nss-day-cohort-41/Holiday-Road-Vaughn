/*
Responsible for generating a list of attraction HTML
representations, and putting in the browser
*/
// import {myAttraction} from"./AttractionProvider.js"

const attractionList = () => {
  // Iterate the collection of eatery objects
  for (const currentAttractionObject of attractionData) {
    // Convert the current attraction to its HTML representation
    const attractionHTML = attractionConverter(currentAttractionObject);

    // Find the <article> element in index.html
    const attractionArticleElement = document.querySelector(".bizarre__list");

    // Put the attraction HTML representation inside the <article> element
    attractionArticleElement.innerHTML += attractionHTML;
  }
};

/*
    This function will convert a single attraction object to an
    HTML representation and return it
*/
const attractionConverter = (attractionObject) => {
  const attractionHTMLRepresentation = `<select name="attraction__list" id="">
    <option value="park">${attractionObject.businessName}</option>
</select>`;

  return attractionHTMLRepresentation;
};
