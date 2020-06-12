const getEateryDetails = () => {
    return fetch(
      "http://holidayroad.nss.team/eateries"
    )
      .then((httpResponse) => {
       //console.log(httpResponse)
        return httpResponse.json();
      })
      .then((arrayofEateries) => {
          return arrayofEateries;
      }
      )
    }


const dropdownTarget = document.querySelector(".eatery__selected")
const clearEateryData = () => dropdownTarget.innerHTML = ""

const showEateryData = (eateryData, target) => {

    for (const data of eateryData) {
        if (data.id == target) {
        
        const selectedEateryHTML = selectedEateryConverter(data)
        const selectedEateryElement = document.querySelector(".eatery__selected")
        selectedEateryElement.innerHTML += selectedEateryHTML
        }
    }
}
const selectedEateryConverter = (data) => {
    const selectedEateryHTML = `
    <div class="park">
        <h3> ${data.businessName} </h3>
    </div>
    `
    return selectedEateryHTML;
}

let eateryDataSelector = document.querySelector(".eateries__dropdown").addEventListener("change", e=>{
    let target =e.target.value
    getEateryDetails().then(
     (eateryData) => {
         showEateryData(eateryData, target)
     }
  
          )
     })
 

const eateryDetailsConverter = (eateryObject) => { 
    const eateryHTMLRepresentation = `
                  <div>
                      <p><b>${eateryObject.businessName}</b></p>
                      <p>Description: ${eateryObject.description}</p>
                      <p>Location: ${eateryObject.city}, ${eateryObject.state}</p>
                  </div>`;
  
    return eateryHTMLRepresentation;
  };
  



  const eateryConverter = (eateryObject) => {

    const eateryHTMLRepresentation = `<data name="attraction__list" id="">
    <option value=${eateryObject.id}>${eateryObject.businessName}</option>
</data>`

    return eateryHTMLRepresentation

} 