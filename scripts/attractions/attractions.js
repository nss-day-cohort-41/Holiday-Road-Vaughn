const attractionTacoConverter = (attractionObject) => { 
  const attractionHTMLRepresentation = `
  <div>
  <p><b>${attractionObject.name}</b></p>
  <p>Description: ${attractionObject.description}</p>
  <p>Location: ${attractionObject.city}, ${attractionObject.state}</p>
</div>`;

  return attractionHTMLRepresentation;
};
// [
//   {
//     "id": 1,
//     "name": "Big White Shirt",
//     "state": "AL",
//     "city": "Andalusia",
//     "description": "Andalusia, Alabama, is the white dress-shirt capital of America, and this highly photographed enormous white shirt sign is a reminder of that. According to Roadside America, the tie is changed seasonally.",
//     "ameneties": {
//       "souvenirs": false,
//       "restrooms": false
//     }
