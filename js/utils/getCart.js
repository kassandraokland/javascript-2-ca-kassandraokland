import { CART_KEY } from "../constants/settings";

export function getAddedProduct() {
    const addedProducts = localStorage.getItem(CART_KEY);

    if (addedProducts === null) {
        return [];
    } else {
        return JSON.parse(addedProducts);
    }
}


