function coins(input) {

    let change = Math.round(Number(input) * 100);
    let coins = 0;

    const coinsVal = [200, 100, 50, 20, 10, 5, 2, 1];

    for (let as of coinsVal) {

        while (change >= as) {
            change -= as;
            coins++;
        }
    }

    console.log(coins);
}

coins(1.23); // ➜ 4
coins(2);    // ➜ 1
coins(0.56); // ➜ 3
coins(2.73); // ➜ 5