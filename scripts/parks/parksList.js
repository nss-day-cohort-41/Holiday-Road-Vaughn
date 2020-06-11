

const showParkData = (parkData) => {
    for (const data of parkData.data) {
        console.log(parkData.data[0].fullName)
        const parkHTML = parkConverter(data)
        const parkArticleElement = document.querySelector(".park__selected")
        parkArticleElement.innerHTML += parkHTML
    }
}

const parkConverter = (data) => {

    const parkHTML = `
    <section class="park">
        <p> ${parkData.data[0].fullName} </p>
    </section>
    `
    
    return parkHTML;
}