function maxNumber (input) {

    let num = 0;
    let max = Number.NEGATIVE_INFINITY;
    
    while (input[num] !== "Stop") {
        let curr = Number(input[num]);

        if (curr > max) {
            max = curr;
        }
        num++;
    }
    console.log(max);
}

maxNumber(["100", "99", "80", "70", "Stop"]);  
maxNumber(["-10", "20", "-30", "Stop"]);       
maxNumber(["45", "-20", "7", "99", "Stop"]);   
maxNumber(["999", "Stop"]);                   
maxNumber(["-1", "-2", "Stop"]);               