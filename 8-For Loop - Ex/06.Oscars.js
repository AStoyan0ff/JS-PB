function grammi(input) {
    
    let name = input[0];
    let points = Number(input[1]);
    let judgesCnt = Number(input[2]);

    let idx = 3;

    for (let as = 0; as < judgesCnt; as++) {

        let judgeName = input[idx++];
        let judgePoints = Number(input[idx++]);

        let addPoints = (judgeName.length * judgePoints) / 2;
        points += addPoints;

        if (points > 1250.5) {

            console.log(
                `Congratulations, ${name} got a nominee for leading role with ${points.toFixed(1)}!`);

            return;
        }
    }

    let needed = 1250.5 - points;

    console.log(
        `Sorry, ${name} you need ${needed.toFixed(1)} more!`);
}

grammi([
    "Zahari Baharov",
    "205",
    4,
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"
]); 

grammi([
    "Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"
]); 
