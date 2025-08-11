function completion(input) {

    let name = input[0];
    let number = 1;
    let grade = 1;
    let falseCnt = 0;
    let sumGrades = 0;

    while (grade <= 12) {
        currGrade = Number(input[number]);

        if (currGrade >= 4.00) {

            sumGrades += currGrade;
            grade++;
        }
        else {
            falseCnt++;
        }

        if (falseCnt > 1) {

            console.log(`${name} has been excluded at ${grade} grade`);
            return;
        }
        number++;
    }

    let avrGrade = sumGrades / 12;
    console.log(`${name} graduated. Average grade: ${avrGrade.toFixed(2)}`);
}

completion([

    "Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"
]);

completion([

    "Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"
]);