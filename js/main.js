// declare global variable
const bestPrice = document.getElementById('best-price')
const memoryPrice = document.getElementById('memory-price');
const storagePrice = document.getElementById('storage-price');
const deliveryPrice = document.getElementById('delivery-price');
const totalPrice = document.getElementById('total-price');
const totalCostPrice = document.getElementById('total-cost');

// onclick event function 
function memoryGb8() {
    memoryPrice.innerText = 0;
    getTotalPrice();
}
// onclick event function
function memoryGb16() {
    memoryPrice.innerText = 180;
    getTotalPrice();
}
// onclick event function
function storageSsd256() {
    storagePrice.innerText = 0;
    getTotalPrice();
}
// onclick event function
function storageSsd512() {
    storagePrice.innerText = 100;
    getTotalPrice();
}
// onclick event function
function storageSsdTb1() {
    storagePrice.innerText = 180;
    getTotalPrice();
}
// onclick event function
function freeChargeDelivery() {
    deliveryPrice.innerText = 0;
    getTotalPrice();
}
// onclick event function
function withChargeDelivery() {
    deliveryPrice.innerText = 20;
    getTotalPrice();
}

// promo code apply
document.getElementById('promo-apply-btn').addEventListener('click', function () {
    const promoCode = document.getElementById('promo-input');
    const promo = 'stevekaku';
    const percentageValue = totalPrice.innerText;
    const percent = 20;
    if (promoCode.value == promo) {
        promoOffer(percent, percentageValue);
    }
    else {
        alert('Incorrect Promo Code! Please, buy regular basis.');
    }
    promoCode.value = '';
})

// promo offer function
function promoOffer(percent, percentageValue) {
    const percentage = (percent / 100) * percentageValue;
    const newTotalCostPrice = totalPrice.innerText - percentage;
    totalCostPrice.innerText = newTotalCostPrice;
}
// total price function
function getTotalPrice() {
    // convert to number
    const bestPriceNumber = Number(bestPrice.innerText);
    const memoryPriceNumber = Number(memoryPrice.innerText);
    const storagePriceNumber = Number(storagePrice.innerText);
    const deliveryPriceNumber = Number(deliveryPrice.innerText);
    let totalPriceNumber = Number(totalPrice.innerText);
    // sum of the total speacification price
    totalPriceNumber = bestPriceNumber + memoryPriceNumber + storagePriceNumber + deliveryPriceNumber;
    totalPrice.innerText = totalPriceNumber;
    totalCostPrice.innerText = totalPriceNumber;
}
