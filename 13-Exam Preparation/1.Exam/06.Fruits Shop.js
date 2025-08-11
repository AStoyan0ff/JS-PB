function func(

    strawberryPrice,
    bananaKg,
    orangeKg,
    raspberryKg,
    strawberryKg) {

    const raspberryPrice = strawberryPrice / 2;
    const orangePrice = raspberryPrice * 0.6;
    const bananaPrice = raspberryPrice * 0.2;


    const strawberryTotal = strawberryKg * strawberryPrice;
    const bananaTotal = bananaKg * bananaPrice;
    const orangeTotal = orangeKg * orangePrice;
    const raspberryTotal = raspberryKg * raspberryPrice;

    const totalCost = strawberryTotal + bananaTotal + orangeTotal + raspberryTotal;
    return totalCost.toFixed(2);
}


console.log(func(48, 10, 3.3, 6.5, 1.7));        // 333.12
console.log(func(63.5, 3.57, 6.35, 8.15, 2.5));  // 561.15