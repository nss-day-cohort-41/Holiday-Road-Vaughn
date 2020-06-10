const attractionConverter = (attractionObject) => {
  const attractionHTMLRepresentation = `
                <ul>
                    <li>id: ${attractionObject}</li>
                    <li>name:${attractionObject.name}</li>
                    <li>state: ${attractionObject.state}</li>
                    <li>city: ${attractionObject.city}</li>
                    <li>description: ${attractionObject.description}</li>
                    <li>ameneties: ${attractionObject.ameneties}</li>

                </ul>`;

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
