
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
        <h3 class="park__name"> ${parkData.data[0].fullName} </h3>
            <p class="park__details"> blue</p>
    </section>
    `
    return parkHTML;
}