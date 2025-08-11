function t(

    excursion,
    puzzleCnt,
    dollsCnt,
    bearsCnt,
    minionCnt,
    trucksCnt, ) {

    const puzzle = 2.60;
    const dolls = 3;
    const bears = 4.10;
    const minion = 8.20;
    const trucks = 2;

    let totalPrice =

        (puzzleCnt * puzzle) +
        (dollsCnt * dolls) +
        (bearsCnt * bears) +
        (minionCnt * minion) +
        (trucksCnt * trucks);

    let totalToys =

        puzzleCnt + dollsCnt +
        bearsCnt + minionCnt +
        trucksCnt;

    if (totalToys >= 50) {
       totalPrice *= 0.75;
    }

    let rent = totalPrice * 0.1;
    let profit = totalPrice - rent;

    if (profit >= excursion) {

        let rem = profit - excursion;
        return `Yes! ${rem.toFixed(2)} lv left.`;
    }
    else {

        let needed = excursion - profit;
        return `Not enough money! ${needed.toFixed(2)} lv needed.`;
    }
}

console.log(t(40.8,20, 25, 30, 50, 10));
console.log(t(320, 8, 2, 5, 5, 1));