function movie (budget, bonus, costume) {

    let decor = budget * 0.10;
    let costumeCost = bonus * costume;

    if (bonus > 150) {
        costumeCost *= 0.90;
    }

    let total = decor + costumeCost;

    if (total > budget) {
        let neededMoney = total - budget;

        console.log("Not enough money!");
        console.log(`Wingard needs ${neededMoney.toFixed(2)} leva more.`);
    }

    else {
        
        let rem = budget - total;

        console.log("Action!");
        console.log(`Wingard starts filming with ${rem.toFixed(2)} leva left.`);
    }
}

movie(20000, 120, 55.5);
movie(15437.62, 186, 57.99);
movie(9587.88, 222, 55.68);

