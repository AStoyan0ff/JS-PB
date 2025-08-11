function balance(input) {

    let N = 0;
    let total = 0;

    while (input[N] !== "NoMoreMoney") {

        let qty = Number(input[N]);

        if (qty < 0) {

            console.log("Invalid operation!");
            break;
        }
        console.log(`Increase: ${qty.toFixed(2)}`);

        total += qty;
        N++;
    }
    console.log(`Total: ${total.toFixed(2)}`);
}

balance([

    "5.51",
    "69.42",
    "100",
    "NoMoreMoney"
]);

balance([

    "120",
    "45.55",
    "-150"
]);