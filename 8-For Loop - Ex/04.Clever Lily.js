function lilly(age, washMachinePrice, toyPrice) {

    let money = 0;
    let toyCount = 0;
    let currMoney = 10;
    let brotherTake = 0;

    for (let curr = 1; curr <= age; curr++) {
        if (curr % 2 === 0) {

            money += currMoney;
            currMoney += 10;
            brotherTake += 1;
        }
        else {
            toyCount += 1;
        }
    }

    let totalMoney = toyCount * toyPrice;
    let totalSave = money + totalMoney - brotherTake;

    let diff = Math.abs(totalSave - washMachinePrice).toFixed(2);

    if (totalSave >= washMachinePrice) {
        console.log(`Yes! ${diff}`);
    }
    else {
        console.log(`No! ${diff}`);
    }
}

lilly(10, 170.00, 6);  // Yes! 5.00
lilly(21, 1570.98, 3); // No! 997.98