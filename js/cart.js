import { getAddedProduct } from "./utils/getCart";

const products = getAddedProduct();

const cartContainer = document.querySelector(".cart");

if (products.length === 0) {
    cartContainer.innerHTML = "No ice cream added.";
}

products.forEach((product) => {
    cartContainer.innerHTML += `<div class="cart-item">
                                    <h5>${product.name}</h4>
                                    <button class="cart-button"></button>
                                </div>`;
});