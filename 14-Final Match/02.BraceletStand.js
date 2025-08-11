function checkGift(moneyPerDay, earningPerDay, expenses, giftPrice) {

    const day = 5;

    let totalMoney = moneyPerDay * day;
    let totalEarning = earningPerDay * day;
    let totalSave = totalMoney + totalEarning;

    let finalPrice = totalSave - expenses;

    if (finalPrice >= giftPrice) {
        console.log(`Profit: ${finalPrice.toFixed(2)} BGN, the gift has been purchased.`);
    }
    else {
        let short = giftPrice - finalPrice;
        console.log(`Insufficient money: ${short.toFixed(2)} BGN.`);
    }
}

//checkGift(5.12, 32.05, 15, 150);
//checkGift(2.10, 17.50, 20.20, 148.50);
//checkGift(15.20, 200.00, 7.30, 1500.12);