/*
Responsible for generating a list of eatery HTML
representations, and putting in the browser
*/
const attractionList = () => {
  // Iterate the collection of eatery objects
  for (const currentAttractionObject of attractionData) {
    // Convert the current location to its HTML representation
    const attractionHTML = attractionConverter(currentAttractionObject);

    // Find the <article> element in index.html
    const attractionArticleElement = document.querySelector(".bizarre__list");

    // Put the location HTML representation inside the <article> element
    attractionArticleElement.innerHTML += attractionHTML;
  }
};

/*
    This function will convert a single location object to an
    HTML representation and return it
*/
const attractionConverter = (attractionObject) => {
  const attractionHTMLRepresentation = `<select name="attraction__list" id="">
    <option value="park">${attractionObject.name}</option>
</select>`;

  return attractionHTMLRepresentation;
};
