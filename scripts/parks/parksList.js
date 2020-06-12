
const contentTarget = document.querySelector(".park__selected")


const showParkData = (parkData) => {
    for (const data of parkData.data) {
        const parkHTML = parkConverter(data)
        const parkArticleElement = document.querySelector(".park__selected")
        parkArticleElement.innerHTML += parkHTML
    }
}
const parkConverter = (data) => {
    const parkHTML = `
    <section class="park">
        <div class="park__header_container">
            <h3 class="park__name"> ${parkData.data[0].fullName} </h3>
            <button onclick="parkDetailButton()" class="show__park_details"> Park Details </button>
        </div>
            <div hidden class="park__class">
                <p class="park__details " >${parkData.data[0].description}</p>
                <p class="park__details "> Address: ${parkData.data[0].addresses[0].line1},${parkData.data[0].addresses[0].city},${parkData.data[0].addresses[0].stateCode}</p>
                <p class="park__details "> Telephone Number: ${parkData.data[0].contacts.phoneNumbers[0].phoneNumber}</p></p>
            </div>
     </section>
    `
    return parkHTML;
}


