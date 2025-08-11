function alpinists(input) {

    let groupCnt = Number(input[0]);
    let peopleCnt = 0;

    let musala = 0;
    let montblanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let as = 1; as <= groupCnt; as++) {

        let people = Number(input[as]);
        peopleCnt += people;

        if (people <= 5) {
            musala += people;
        }
        else if (people <= 12) {
            montblanc += people;
        }
        else if (people <= 25) {
            kilimanjaro += people;
        }
        else if (people <= 40) {
            k2 += people;
        }
        else {
            everest += people;
        } 
    }

    console.log(`${((musala / peopleCnt) * 100).toFixed(2)}%`);
    console.log(`${((montblanc / peopleCnt) * 100).toFixed(2)}%`);
    console.log(`${((kilimanjaro / peopleCnt) * 100).toFixed(2)}%`);
    console.log(`${((k2 / peopleCnt) * 100).toFixed(2)}%`);
    console.log(`${((everest / peopleCnt) * 100).toFixed(2)}%`);
};

alpinists([
    "10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"
]);

alpinists([
    "5",
    "25",
    "41",
    "31",
    "250",
    "6"
]);
