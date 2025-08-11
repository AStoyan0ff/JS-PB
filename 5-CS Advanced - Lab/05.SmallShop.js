function shop(product, city, quantity) {

    const cityList = {

        'Sofia': {

            'coffee': 0.50,
            'water': 0.80,
            'beer': 1.20,
            'sweets': 1.45,
            'peanuts': 1.60
        },

        'Plovdiv': {

            'coffee': 0.40,
            'water': 0.70,
            'beer': 1.15,
            'sweets': 1.30,
            'peanuts': 1.50
        },

        'Varna': {

            'coffee': 0.45,
            'water': 0.70,
            'beer': 1.10,
            'sweets': 1.35,
            'peanuts': 1.55
        }
    };

    if (!cityList[city] || !cityList[city][product]) {
        console.log("Invalid city or product");
    }

    const price = cityList[city][product] * quantity;
    return price.toFixed(2);
}
console.log(shop('coffee', 'Varna', 2));    // 0.90
console.log(shop('peanuts', 'Plovdiv', 1)); // 1.50
console.log(shop('beer', 'Sofia', 2));      // 2.40
console.log(shop('water', 'Plovdiv', 2));   // 1.40
console.log(shop('sweets', 'Sofia', 2.23)); // 3.23
