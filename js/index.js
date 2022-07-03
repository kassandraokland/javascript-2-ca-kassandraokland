import { CART_KEY } from "./constants/settings.js";
import iceCreams from "./data/ice-creams.js";
//import { getAddedProduct } from "./components/addFunctions";

const container = document.querySelector(".ice-creams");

function getAddedProduct() {
    const addedProducts = localStorage.getItem(CART_KEY);

    if (addedProducts === null) {
        return [];
    } else {
        return JSON.parse(addedProducts);
    }
}


const products = getAddedProduct();

function createHtml() {

    container.innerHTML = "";

    for (let i = 0; i < iceCreams.length; i++) {

        let cssClass = "cart-button";

        // check through favs array
        // does the product id exist in the favs array
        const doesObjectExist = products.find(function (addedProduct) {
            console.log(addedProduct);

            return parseInt(addedProduct.id) === iceCreams[i].id;
        });

        console.log(doesObjectExist);

        // if is in the array, change the style of the i element
        if (doesObjectExist) {
            cssClass = "cart-button__added";
        }

        container.innerHTML += `<div class="ice-cream" style="border-color: ${iceCreams[i].colour};">
                                        <h5>${iceCreams[i].name}</h4>
                                        <p><b>${iceCreams[i].flavours}</b></p>
                                        <p class="price"><b>${iceCreams[i].price} kr</b></p>
                                        <button class="cart-button" data-id="${iceCreams[i].id}" data-name="${iceCreams[i].name}"></button>
                                    </div>`;
    }
}

createHtml();

const addButtons = document.querySelectorAll(".ice-cream button");

addButtons.forEach((button) => {
    button.addEventListener("click", handleClick);
});

function handleClick() {
    this.classList.toggle("cart-button__added");
    this.classList.toggle("cart-button");

    const id = this.dataset.id;
    const name = this.dataset.name;

    const currentAddedProduct = getAddedProduct();

    const productExists = currentAddedProduct.find(function (addedProduct) {
        return addedProduct.id === id;
    });

    if (productExists === undefined) {
        const product = { id: id, name: name };
        currentAddedProduct.push(product);
        saveAddedProduct(currentAdded);
    } else {
        const newProduct = currentAddedProduct.filter((addedProduct) => addedProduct.id !== id);
        saveAddedProduct(newProduct);
    }
}

function saveAddedProduct(addedProducts) {
    localStorage.setItem(CART_KEY, JSON.stringify(addedProducts));
}
