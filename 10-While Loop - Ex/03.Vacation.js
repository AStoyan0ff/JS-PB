function holiday(data) {

    let target = Number(data[0]);
    let currMoney = Number(data[1]);

    let days = 0;
    let spendDays = 0;
    let cnt = 2;

    while (currMoney < target) {

        let cmd = data[cnt++];
        let qty = Number(data[cnt++])
        days++;

        if (cmd === "spend") {

            spendDays++;
            currMoney -= qty;

            if (currMoney < 0) {
                currMoney = 0;
            }
        }
        else if (cmd === "save") {

            currMoney += qty;
            spendDays = 0;
        }

        if (spendDays === 5) {

            console.log("You can't save the money.");
            console.log(days);
            return;
        }
    }
    console.log(`You saved the money for ${days} days.`);
}

holiday([

    "2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"
]);

holiday([

    "110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"
]);

holiday([

    "250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"
]);