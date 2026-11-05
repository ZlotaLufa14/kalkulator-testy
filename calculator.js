/**
* Oblicza cenę produktu po uwzględnieniu rabatu.
* @param {number} price - Cena produktu
* @param {number} discount - Rabat w procentach (0-100)
* @returns {number} Cena po rabacie
*/
function calculateDiscount(price, discount) {
    if (typeof price !== "number" || !Number.isFinite(price)) {
    throw new Error("Cena musi być liczbą.");
    }
    if (typeof discount !== "number" || !Number.isFinite(discount)) {
    throw new Error("Rabat musi być liczbą.");
    }
    if (price < 0) {
    throw new Error("Cena nie może być ujemna.");
    }
    if (discount < 0 || discount > 100) {
    throw new Error("Rabat musi być z zakresu 0-100.");
    }
    const result = price * (1 - discount / 100);
    return Math.round(result * 100) / 100;
}

function calculateVAT(price) {
    if (price == null || price == undefined) {
    throw new Error("Cena nie może być pusta.");
    }
    if (price == Infinity) {
    throw new Error("Cena musi być skończona.");
    }
    if (typeof price !== "number" || !Number.isFinite(price)) {
    throw new Error("Cena musi być liczbą.");
    }
    if (price < 0) {
    throw new Error("Cena nie może być ujemna.");
    }

    const tax = 0.23;
    let newPrice = (price * tax).toFixed(2);
    return parseFloat(newPrice);
}

module.exports = { calculateDiscount, calculateVAT };