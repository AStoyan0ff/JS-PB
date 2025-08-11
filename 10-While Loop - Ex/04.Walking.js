function walk(data) {

    let target = 10000;
    let totalSteps = 0;
    let cnt = 0;

    while (cnt < data.length) {
        let input = data[cnt++];

        if (input === "Going home") {

            let homeSteps = Number(data[cnt]);
            totalSteps += homeSteps;
            break;
        }
        else {

            let steps = Number(input);
            totalSteps += steps;

            if (totalSteps >= target) {
                break;
            }
        }
    }

    if (totalSteps >= target) {

        console.log("Goal reached! Good job!");
        console.log(`${totalSteps - target} steps over the goal!`);
    }
    else {
        
        console.log(`${target - totalSteps} more steps to reach goal.`);
    }
}

walk(["1000", "1500", "2000", "6500"]);
walk(["1500", "300", "2500", "3000", "Going home", "200"]);
walk(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
walk(["125", "250", "4000", "30", "2678", "4682"]);