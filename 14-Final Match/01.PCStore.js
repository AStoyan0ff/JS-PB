function store(cpuPrice, gpuPrice, ramPrice, ramCnt, discount) {

    const dollarToBGN = 1.57;

    let cpuBGN = cpuPrice * dollarToBGN;
    let gpuBGN = gpuPrice * dollarToBGN;
    let ramBGN = ramPrice * dollarToBGN;

    let totalRam = ramBGN * ramCnt;

    cpuBGN -= cpuBGN * discount;
    gpuBGN -= gpuBGN * discount;

    let totalPrice = cpuBGN + gpuBGN + totalRam;

    console.log(`Money needed - ${totalPrice.toFixed(2)} leva.`);
}

//store(500, 200, 80, 2, 0.05);
//store(1200, 850, 120, 4, 0.1);