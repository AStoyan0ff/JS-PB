function painter(nylonQty, paintQty, thinnerQty, hours) {

    const nylonPrice = 1.50;
    const paintPrice = 14.50;
    const thinnerPrice = 5.00;
    const bagsPrice = 0.40;

    const extraNylon = 2;
    const extraPercent = 0.10;

    let totalNylon = (nylonQty + extraNylon) * nylonPrice;
    let totalPaint = (paintQty * (1 + extraPercent)) * paintPrice;
    let totalThinner = thinnerQty * thinnerPrice;

    let totalMaterials = totalNylon + totalPaint + totalThinner + bagsPrice;

    let workersCost = totalMaterials * 0.30 * hours;
    let totalCost = totalMaterials + workersCost;

    return totalCost.toFixed(2);
}
                // Out
console.log(painter(10, 11, 4, 8));  //  727.09
console.log(painter(5, 10, 10, 1));  //  286.52