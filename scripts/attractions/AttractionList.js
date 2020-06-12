//named var going into DOM where show_attractions_details is in HTML

const attractionVisibilityButton = document.querySelector(
  ".show__attraction__details"
);

//Put var I just made into an addEventListener function...when click happens on var, look for bizarre_list dropDown [id] value.
attractionVisibilityButton.addEventListener("click", (event) => {
//   document.querySelector(".attractionList").classList.toggle("hidden");
    let bizarreDropdown = document.querySelector(".bizarre__list").value;
    console.log(bizarreDropdown)

    //this is empty taco holder array, will put data in later....Iterating single object from our fetch call that calls json objects...
    
    let detailsData = [];

    const getDetails = () => {
      return fetch(
        "http://holidayroad.nss.team/bizarreries"
      )
        .then((httpResponse) => {
          return httpResponse.json();
        })
        .then((arrayOfAttractions) => {
            detailsData = arrayOfAttractions;

            let taco = []


            
            for (i = 0; i < detailsData.length; i++) {
                // console.log(detailsData[i].id);
                if (bizarreDropdown == detailsData[i].id) {
                    // console.log(
                    //   detailsData[i].id + detailsData[i].name + detailsData[i].description
                     taco = detailsData[i];
                    // return detailsData[i]
                    
                }
            }
            // This data is Taco
            return taco
        }).then((bizData) => { 
            steve(bizData)
            
            
        })
    };

    getDetails()
});


const attractionList = () => {
    // Iterate the collection of eatery objects
    for (const currentAttractionObject of attractionData) {

        // Convert the current location to its HTML representation
        const attractionHTML = attractionConverter(currentAttractionObject)

        // Find the <article> element in index.html
        const attractionArticleElement = document.querySelector(".bizarre__list")

        // Put the location HTML representation inside the <article> element
        attractionArticleElement.innerHTML += attractionHTML
    }
}


const attractionConverter = (attractionObject) => {

    const attractionHTMLRepresentation = `<select name="attraction__list" id="">
    <option value=${attractionObject.id}>${attractionObject.name}</option>
</select>`

    return attractionHTMLRepresentation

} 

const steve =(object) => { console.log (object)
  // Iterate the collection of attraction objects
//   for (const currentAttractionObject of attractionData) {
    // Convert the current location to its HTML representation
    let biz = object
    const attractionHTML = attractionTacoConverter(biz);
    

    // Find the <section>  (.bizDetails)element in index.html
    const attractionArticleElement = document.querySelector(".bizDetails");

    // Put the location HTML representation inside the <article> element
    attractionArticleElement.innerHTML = attractionHTML;
//   }
};