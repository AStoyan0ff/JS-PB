function sumNumber(start, end, magicNum) {

    let cnt = 0;
    let isFound = false;

    for (let pos = start; pos <= end; pos++) {
        for (let idx = start; idx <= end; idx++) {
            cnt++;

            if (pos + idx === magicNum) {

                console.log(`Combination N:${cnt} (${pos} + ${idx} = ${magicNum})`);
                isFound = true;
                return;    
            }
        }
    }

    if (!isFound) {
        console.log(`${cnt} combinations - neither equals ${magicNum}`);
    }
}

sumNumber(1, 10, 5);
sumNumber(88, 888, 1000);
sumNumber(23, 24, 20);
sumNumber(88, 888, 2000);