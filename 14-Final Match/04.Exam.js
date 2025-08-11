function exam(input) {

    let studentsNumber = Number(input[0]);

    let topStrudents = 0;
    let between45 = 0;
    let between34 = 0;
    let fail = 0;
    let totalScore = 0;

    for (let pos = 1; pos <= studentsNumber; pos++) {

        let grade = parseFloat(input[pos]);
        totalScore += grade;

        if (grade >= 5.00) {
            topStrudents++;
        }
        else if (grade >= 4.00) {
            between45++;
        }
        else if (grade >= 3.00) {
            between34++;
        }
        else {
            fail++;
        }
    }

    let avr = totalScore / studentsNumber;

    console.log(`Top students: ${(topStrudents / studentsNumber * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(between45 / studentsNumber * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(between34 / studentsNumber * 100).toFixed(2)}%`);
    console.log(`Fail: ${(fail / studentsNumber * 100).toFixed(2)}%`);
    console.log(`Average: ${avr.toFixed(2)}`);

}
//exam([
    //"10",
    //"3.00",
    //"2.99",
    //"5.68",
    //"3.01",
    //"4",
    //"4",
    //"6.00",
    //"4.50",
    //"2.44",
    //"5"
//]);