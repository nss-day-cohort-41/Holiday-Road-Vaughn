const eateryDetailsButton = document.querySelector(
  ".show__eatery__details"
);

eateryDetailsButton.addEventListener("click", (event) => {
//   document.querySelector(".eateryList").classList.toggle("hidden");
    let eateryDropdown = document.querySelector(".eateries__dropdown").value;
    console.log(eateryDropdown)

    let eateryDetailsData = [];

    const getEateryDetails = () => {
      return fetch(
        "http://holidayroad.nss.team/eateries"
      )
        .then((httpResponse) => {
          return httpResponse.json();
        })
        .then((arrayofEateries) => {
            eateryDetailsData = arrayofEateries;

            let iterator = []
            
            for (i = 0; i < eateryDetailsData.length; i++) {
                // console.log(eateryDetailsData[i].id);
                if (eateryDropdown == eateryDetailsData[i].id) {
                    // console.log(
                    //   eateryDetailsData[i].id + eateryDetailsData[i].name + eateryDetailsData[i].description
                     iterator = eateryDetailsData[i];
                    // return eateryDetailsData[i]
                    
                }
            }
            // This data is Taco
            return iterator
        }).then((data) => { 
            goku(data)
            
            
        })
    };

    getEateryDetails()
});












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

    const eateryHTMLRepresentation = `<select name="attraction__list" id="">
    <option value=${eateryObject.id}>${eateryObject.businessName}</option>
</select>`

    return eateryHTMLRepresentation

} 
const goku =(object) => { console.log (object)
  // Iterate the collection of attraction objects
//   for (const currentEateryObject of eateryData) {
    // Convert the current location to its HTML representation
    let eat = object
    const eateryHTML = eateryDetailsConverter(eat);
    

    // Find the <section>  (.eateryDetails)element in index.html
    const eateryArticleElement = document.querySelector(".eateryDetails");

    // Put the location HTML representation inside the <article> element
    eateryArticleElement.innerHTML = eateryHTML;
//   }
};








































































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
                  // console.log(eateryDetailsData[i].id);
                  if (eateryDropdown == eateryDetailsData[i].id) {
                      // console.log(
                      //   eateryDetailsData[i].id + eateryDetailsData[i].name + eateryDetailsData[i].description
                       getEateryDetails = eateryDetailsData[i];
                      // return eateryDetailsData[i]
                      
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
  //   for (const currentEateryObject of eateryData) {
      // Convert the current location to its HTML representation
      let specificEatery = object
      const specificHTML = specificEateryConverter(specificEatery);
      
  
      // Find the <section>  (.eateryDetails)element in index.html
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