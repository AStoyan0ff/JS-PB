function expenses(yearsFee) {

    const shoes = yearsFee * 0.60;
    const outfit = shoes * 0.80;
    const ball = outfit / 4;
    const accessories = ball / 5;

    let finalExpenses = yearsFee + shoes + outfit + ball + accessories;
    return finalExpenses.toFixed(2);
}

console.log(expenses(365)); // 811.76
console.log(expenses(550)); // 1223.20