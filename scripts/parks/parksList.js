

const showParkData = (parkData) => {
    for (const data of parkData) {
        const parkHTML = parkConverter(data)
        const parkArticleElement = document.querySelector(".park__selected")
        parkArticleElement.innerHTML += parkHTML
    }
}

const parkConverter = (data) => {

    const parkHTML = `
    <section class="park">
        <p> ${data} </p>
    </section>
    `
    
    return parkHTML;
}