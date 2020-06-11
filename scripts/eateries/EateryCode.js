







































































/*const eateryDetailsButton = document.querySelector(
    ".show__eatery__details"
  );
  
  eateryDetailsButton.addEventListener("click", (event) => {
  
      let eateryDropdown = document.querySelector(".eateries__dropdown").value;
      console.log(eateryDropdown)
  
      let eateryDetailsData = [];
  
      const getEateriesDetails = () => {
        return fetch(
          "http://holidayroad.nss.team/eateries"
        )
          .then((httpResponse) => {
            return httpResponse.json();
          })
          .then((arrayOfEateriesDetails) => {
              eateryDetailsData = arrayOfEateriesDetails;
  
              let getEateryDetails = []
              
              for (i = 0; i < eateryDetailsData.length; i++) {
                  // console.log(detailsData[i].id);
                  if (eateryDropdown == eateryDetailsData[i].id) {
                      // console.log(
                      //   detailsData[i].id + detailsData[i].name + detailsData[i].description
                       getEateryDetails = eateryDetailsData[i];
                      // return detailsData[i]
                      
                  }
              }
              return getEateryDetails
          }).then((data) => { 
              eateryIteration(data)
              
              
          })
      };
  
      getEateriesDetails()
  });
  
  /*
Responsible for generating a list of eatery HTML
representations, and putting in the browser
*/
/*const tacoEateryList = () => {
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
*/

/*
    This function will convert a single location object to an
    HTML representation and return it
*/
/*const specificEateryConverter = (eateryObject) => {

    const eateryHTMLRepresentation = `
    <option value="eatery">${eateryObject.businessName}</option>`

    return eateryHTMLRepresentation

} 
   
  const eateryIteration =(object) => { console.log (object)
    // Iterate the collection of eatery objects
  //   for (const currentAttractionObject of attractionData) {
      // Convert the current location to its HTML representation
      let specificEatery = object
      const specificHTML = specificEateryConverter(specificEatery);
      
  
      // Find the <section>  (.bizDetails)element in index.html
      const eateryArticleElement = document.querySelector(".eatery__selected");
  
      // Put the location HTML representation inside the <article> element
      eateryArticleElement.innerHTML = specificHTML;
  //   }
  };

  const converter = (eateryObject) => { 
    const eateryHTMLRepresentation = `
                  <p>
                      <li>id: ${eateryObject[0].businessName}</li>
                      <li>name:${eateryObject.description}</li>
                    </p>`;
                
  
    return eateryHTMLRepresentation;
  };
  */