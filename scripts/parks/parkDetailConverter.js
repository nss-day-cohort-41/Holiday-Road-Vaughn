

const parkDetailConverter = (parKData) => {
    const parkDetailHTML = `
    <p> ${parkData.data[0].description}</p>
    <p> ${parkData.data[0].entranceFees}</p>
    <p> ${parkData.data[0].operatingHours}</p>
    <p> ${parkData.data[0].addresses[0]}</p>
    <p> ${parkData.data[0].contacts.phoneNumbers[0]}</p>
    `;
return parkDetailHTML;
};