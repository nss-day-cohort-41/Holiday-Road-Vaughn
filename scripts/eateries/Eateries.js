const eateryDetailsConverter = (eateryObject) => { 
    const eateryHTMLRepresentation = `
                  <ul>
                      <li>id: ${eateryObject.id}</li>
                      <li>name:${eateryObject.businessName}</li>
                      <li>description: ${eateryObject.description}</li>
                  </ul>`;
  
    return eateryHTMLRepresentation;
  };
  



  const eateryConverter = (eateryObject) => {

    const eateryHTMLRepresentation = `<select name="attraction__list" id="">
    <option value=${eateryObject.id}>${eateryObject.businessName}</option>
</select>`

    return eateryHTMLRepresentation

} 
