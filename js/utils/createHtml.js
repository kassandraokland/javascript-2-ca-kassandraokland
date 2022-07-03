export default function createHtml(data) {
    const container = document.querySelector(".ice-creams");

    container.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        container.innerHTML += `<div class="ice-cream">
                                        <h4>${data[i].name}</h4>
                                        <p>:<b>${data[i].flavours}</b></p>
                                        <p><b>${data[i].price}</b></p>
                                    </div>`;
    }
}