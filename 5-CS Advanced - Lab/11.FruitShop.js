function f(fruit, day, quantity) {

    const prices = {

        'weekday': {

            'banana': 2.50,
            'apple': 1.20,
            'orange': 0.85,
            'grapefruit': 1.45,
            'kiwi': 2.70,
            'pineapple': 5.50,
            'grapes': 3.85
        },

        'weekend': {

            'banana': 2.70,
            'apple': 1.25,
            'orange': 0.90,
            'grapefruit': 1.60,
            'kiwi': 3.00,
            'pineapple': 5.60,
            'grapes': 4.20
        }
    };
    const weekdays = [

        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
    ];

    const weekends = [

        'Saturday',
        'Sunday'
    ];

    if (!weekdays.includes(day) && !weekends.includes(day)) {
        return 'error';
    }
    const allFruits = Object.keys(prices.weekday);

    if (!allFruits.includes(fruit)) {
        return 'error';
    }
    if (quantity <= 0) {
        return 'error';
    }
    const priceGroup = weekdays.includes(day) ? 'weekday' : 'weekend';
    const price = prices[priceGroup][fruit] * quantity;

    return price.toFixed(2);
}

console.log(f('apple', 'Tuesday', 2));       // 2.40
console.log(f('orange', 'Sunday', 3));       // 2.70
console.log(f('kiwi', 'Monday', 2.5));       // 6.75
console.log(f('grapes', 'Saturday', 0.5));   // 2.10
console.log(f('tomato', 'Monday', 0.5));     // error
