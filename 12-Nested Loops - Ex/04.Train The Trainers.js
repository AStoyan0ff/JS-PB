function trainers(input) {

    let cnt = Number(input[0]); // броя на съдийте
    let idx = 1;

    let totalSum = 0;
    let totalCnt = 0;

    while (input[idx] !== "Finish") {

        let presentName = input[idx++];
        let presentSum = 0;

        for (let pos = 0; pos < cnt; pos++) {

            let score = Number(input[idx++]);
            presentSum += score;
        }

        let avrScore = presentSum / cnt;
        totalSum += presentSum;
        totalCnt += cnt;

        console.log(`${presentName} - ${avrScore.toFixed(2)}.`);
    }
    let finalAvrg = totalSum / totalCnt;
    console.log(`Student's final assessment is ${finalAvrg.toFixed(2)}.`);
}

trainers([
    
    "2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"
]);