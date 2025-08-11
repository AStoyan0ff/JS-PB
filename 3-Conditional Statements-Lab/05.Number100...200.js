function number(N) {

    if (N < 100) {
        return "Less than 100";
    }
    else if (N > 200) {
        return "Greater than 200";
    }
    else {
        return "Between 100 and 200";
    }
}
// Test Out
console.log(number(95));
console.log(number(120));
console.log(number(210));

