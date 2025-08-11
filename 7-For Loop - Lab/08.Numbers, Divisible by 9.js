function divisible(start, end) {

    let digits = [];
    let result = 0;
    
    for (let pos = start; pos <= end; pos++) {

        if (pos % 9 === 0) {
            digits.push(pos);
            result += pos;
        }
    }
    
    console.log(`The sum: ${result}`);
    digits.forEach(pos => console.log(pos));
}
divisible(100, 200);