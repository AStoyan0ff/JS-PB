function excursionPackage(input) {

    let sea = Number(input[0]);
    let mountain = Number(input[1]);
    let profit = 0;

    for (let pos = 2; pos < input.length; pos++) {
        let cmd = input[pos];

        if (cmd === "Stop") {
            break;
        }

        if (cmd === "sea") {
            if (sea > 0) {

                profit += 680;
                sea--;
            }
        }
        else if (cmd === "mountain") {
            if (mountain > 0) {
                
                profit += 499;
                mountain--;
            }
        }

        if (sea === 0 && mountain === 0) {
            console.log("Good job! Everything is sold.");
            break;
        }
    }
    console.log(`Profit: ${profit} leva.`);
}

//excursionPackage(["2", "2", "sea", "mountain", "sea", "sea", "mountain"]);
//excursionPackage(["6", "3", "sea", "mountain", "mountain", "mountain", "sea", "Stop"]);