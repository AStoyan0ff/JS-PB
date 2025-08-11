function cinema(movie, rows, cols) {

    const ticket = {

        'Premiere': 12.00,
        'Normal': 7.50,
        'Discount': 5.00
    };

    let totals = rows * cols * ticket[movie];
    return `${totals.toFixed(2)} leva`;
}

console.log(cinema('Premiere', 10, 12));   // 1440.00 leva
console.log(cinema('Normal', 21, 13));     // 2047.50 leva
console.log(cinema('Discount', 12, 30));   // 1800.00 leva
