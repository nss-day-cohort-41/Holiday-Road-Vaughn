const eateryDetailsButton = document.querySelector(
  ".show__eatery__details"
);

eateryDetailsButton.addEventListener("click", (event) => {
//   document.querySelector(".eateryList").classList.toggle("hidden");
    let eateryDropdown = document.querySelector(".eateries__dropdown").value;

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
            
            return iterator
        }).then((data) => { 
            populateDropdown(data)
            
            
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


const populateDropdown =(object) => { console.log (object)
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
