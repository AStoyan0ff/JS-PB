function tennisDjoko(racketPrice, racketCnt, shoesCnt) {
    const totalRacketPrice = racketPrice * racketCnt;
   
    const shoePrice = racketPrice / 6;
    const totalShoesPrice = shoePrice * shoesCnt;
   
    const addEquipt = 0.2 * (totalRacketPrice + totalShoesPrice);
    const totalCost = totalRacketPrice + totalShoesPrice + addEquipt;

    const djokoPrice = Math.floor(totalCost / 8);
    const sponsorPrice = Math.ceil(totalCost * 7 / 8);

    console.log(`Price to be paid by Djokovic ${djokoPrice}`);
    console.log(`Price to be paid by sponsors ${sponsorPrice}`);
}
tennisDjoko(850, 4, 2);
// Price to be paid by Djokovic 552
// Price to be paid by sponsors 3868
