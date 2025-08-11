function minNumber (input) {

    let num = 0;
    let min = Number.POSITIVE_INFINITY;
    
    while (input[num] !== "Stop") {
        let curr = Number(input[num]);

        if (curr < min) {
            min = curr;
        }
        num++;
    }
    console.log(min);
}

minNumber(["100", "99", "80", "70", "Stop"]);  
minNumber(["-10", "20", "-30", "Stop"]);       
minNumber(["45", "-20", "7", "99", "Stop"]);   
minNumber(["999", "Stop"]);                   
minNumber(["-1", "-2", "Stop"]);               