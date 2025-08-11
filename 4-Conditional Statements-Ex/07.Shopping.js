function pc(budget, videoCards, processors, rams) {

    const videoCardPrice = 250;
    const totalVideoCardsPrice = videoCards * videoCardPrice;
    const processorPrice = totalVideoCardsPrice * 0.35;
    const ramPrice = totalVideoCardsPrice * 0.10;

    let totalCost =
        totalVideoCardsPrice + (processors * processorPrice) + (rams * ramPrice);

    if (videoCards > processors) {
        totalCost *= 0.85;
    }

    if (budget >= totalCost) {

        const rem = budget - totalCost;
        console.log(
            `You have ${rem.toFixed(2)} leva left!`);
    }
    else {

        const need = totalCost - budget;
        console.log(
            `Not enough money! You need ${need.toFixed(2)} leva more!`);
    }
}
pc(900, 2, 1, 3);      // 198.75 lv
pc(920.45, 3, 1, 1);   //   3.92 lv