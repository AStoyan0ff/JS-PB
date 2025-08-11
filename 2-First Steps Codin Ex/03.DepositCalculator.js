function f(depositSum, periodMonths, annualPercent) {

    let annualInterest = depositSum * (annualPercent / 100);
    let monthInterest = annualInterest / 12;
    let totalSum = depositSum + (periodMonths * monthInterest);

    let setPrecision = totalSum.toFixed(2);
    return setPrecision;
}

console.log(f(200, 3, 5.7));
console.log(f(2350, 6, 7));