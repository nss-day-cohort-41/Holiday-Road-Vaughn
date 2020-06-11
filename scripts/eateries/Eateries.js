const eateryDetailsConverter = (eateryObject) => { 
    const eateryHTMLRepresentation = `
                  <ul>
                      <li>id: ${eateryObject.id}</li>
                      <li>name:${eateryObject.businessName}</li>
                      <li>description: ${eateryObject.description}</li>
                  </ul>`;
  
    return eateryHTMLRepresentation;
  };
  







































/*const eateryContentTarget = document.querySelector(".eatery__selected")
const clearEateryData = () => eateryContentTarget.innerHTML = ""

const showEateryData = (eateryData) => {
    for (const data of eateryData.data) {
        const eateryHTML = eateryDetailConverter(data)
        const eateryArticleElement = document.querySelector(".eatery__selected")
        eateryArticleElement.innerHTML += parkHTML
    }
}
const eateryDetailConverter = (data) => {
    const eateryHTML = `
    <section class="eatery">
        <p> ${eateryData.data[0].businessName} </p>
    </section>
    `
    return eateryHTML;
}
*/