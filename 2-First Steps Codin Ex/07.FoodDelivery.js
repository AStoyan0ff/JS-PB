function foodOrder(chickenCount, fishCount, veggiesCount) {

    const chickenMenu = 10.35;
    const fishMenu = 12.40;
    const veggiesMenu = 8.15;
    const delivery = 2.50;

    let totalChickens = chickenCount * chickenMenu;
    let totalFish = fishCount * fishMenu;
    let totalVeggies = veggiesCount * veggiesMenu;

    let totalMenu = totalChickens + totalFish + totalVeggies;

    let dessertPrice = totalMenu * 0.20; // 20% VAT
    let finalOrders = totalMenu + dessertPrice + delivery;

    return finalOrders.toFixed(2);
}
console.log(foodOrder(2, 4, 3)); // 116.20
console.log(foodOrder(9, 2, 6)); // 202.72