function generatePin(input) {

    
    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);

    for (let idx = 2; idx <= first; idx += 2) { 
        for (let idx2 = 2; idx2 <= second; idx2++) {

            if (isPrime(idx2)) {

                for (let idx3 = 2; idx3 <= third; idx3 += 2) { 
                    console.log(`${idx} ${idx2} ${idx3}`);
                }
            }
        }
    }

    function isPrime(N) {

        const primes = [2, 3, 5, 7];
        return primes.includes(N);
    }
}


//generatePin(["3", "5", "5"]);
//generatePin(["8", "2", "8"]);