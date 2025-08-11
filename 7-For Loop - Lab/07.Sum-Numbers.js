function result(N) {

    let sum = 0;

    for (let c of N) {
        sum += parseInt(c, 10);
    }
    return `The sum of the digits is:${sum}`;
}

console.log(result("1234"));
console.log(result("564891"));
