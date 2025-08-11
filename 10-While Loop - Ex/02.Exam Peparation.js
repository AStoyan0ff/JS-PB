function exam(input) {

    let maxPoorGrade = Number(input[0]);
    let cnt = 1;

    let poorGrades = 0;
    let totalScore = 0;
    let problemCnt = 0;
    let problem = "";

    while (input[cnt] !== "Enough") {
        let name = input[cnt++];
        let grade = Number(input[cnt++]);

        totalScore += grade;
        problemCnt++;
        problem = name;

        if (grade <= 4) {
            poorGrades++;

            if (poorGrades === maxPoorGrade) {

                console.log(`You need a break, ${poorGrades} poor grades.`);
                return;
            }
        }
    }

    let avr = totalScore / problemCnt;

    console.log(`Average score: ${avr.toFixed(2)}`);
    console.log(`Number of problems: ${problemCnt}`);
    console.log(`Last problem: ${problem}`);
}

exam([

    "3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"
]);

exam([

    "2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"
]);

