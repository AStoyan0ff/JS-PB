function trade(city, sales) {

    if (sales < 0 || !['Sofia', 'Varna', 'Plovdiv'].includes(city)) {
        return 'error';
    }

    let rat = {

        'Sofia': [0.05, 0.07, 0.08, 0.12],
        'Varna': [0.045, 0.075, 0.10, 0.13],
        'Plovdiv': [0.055, 0.08, 0.12, 0.145]
    };

    let comm;

    if (sales <= 500) {
        comm = rat[city][0];
    }
    else if (sales <= 1000) {
        comm = rat[city][1];
    }
    else if (sales <= 10000) {
        comm = rat[city][2];
    }
    else {
        comm = rat[city][3];
    }

    let commission = sales * comm;
    return commission.toFixed(2);
}

console.log(trade('Sofia', 1500));     // 120.00
console.log(trade('Plovdiv', 499.99)); // 27.50
console.log(trade('Varna', 3874.50));  // 387.45
console.log(trade('Kaspichan', -50));  // error
