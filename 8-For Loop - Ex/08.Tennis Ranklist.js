function rankList(input) {

    let tournament = Number(input[0]);
    let startPoints = Number(input[1]);
    
    let getPoints = 0;
    let wins = 0;

    for (let as = 2; as < 2 + tournament; as++) {
        let result = input[as];

        switch(result) {

            case "W":

                getPoints += 2000;
                wins++;
                break;

            case "F":

                getPoints += 1200;
                break;

            case "SF":

                getPoints += 720;
                break;    
        }
    }

    let finalPoints = startPoints + getPoints;
    let avrgPoints = Math.floor(getPoints / tournament);
    let winPercent = (wins / tournament * 100).toFixed(2);

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${avrgPoints}`);
    console.log(`${winPercent}%`);
}
 // AStoyanoff
rankList([ 
    "5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"    
]);

rankList([
    "4",
    "750",
    "SF",
    "W",
    "SF",
    "W"    
]);

rankList([
    "7",
    "1200",
    "SF",
    "F",
    "W",
    "F",
    "W",
    "SF",
    "W"    
]);