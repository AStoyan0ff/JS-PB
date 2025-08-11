function combo (input) {

    let isValid = 0;

    for (let a = 0; a <= input; a++) {
        for (let b = 0; b <= input; b++) {
            for (let c = 0; c <= input; c++) {

                if (a + b + c === input) {
                    isValid++;
                }
            }
        }
    }
    return isValid;
}
console.log(combo(25));