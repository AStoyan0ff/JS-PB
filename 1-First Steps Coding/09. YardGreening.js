function yardGreening(input) {

    let price = input * 7.61;
    let discount = price * 0.18;
    price -= discount;

    console.log(`The final price is: ${price} lv.\nThe discount is: ${discount} lv.`);
}
yardGreening(550);