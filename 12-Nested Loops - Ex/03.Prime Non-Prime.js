function sum(input) {

    let primeSum = 0;
    let nonPrimeSum = 0;

    for (let as of input) {

        if (as === "stop") break;
        let num = Number(as);

        if (num < 0) {

            console.log("Number is negative.");
            continue;
        }

        if (isPrime(num)) {
            primeSum += num;
        }
        else {
            nonPrimeSum += num;
        }
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);

    // Helper Function

    function isPrime(N) {
        if (N < 2) return false;

        for (let d = 2; d * d <= N; d++) {
            if (N % d === 0) return false;
        }
        return true;
    }
}

sum(["3", "9", "0", "7", "19", "4", "stop"]);
sum(["30", "83", "33", "-1", "20", "stop"]);
sum(["0", "-9", "0", "stop"]);