function pyramid(N) {

    let curr = 1;
    let isBig = false;
    let printLine = "";

    for (let r = 1; r <= N; r++) {
        for (let c = 1; c <= r; c++) {

            if (curr > N) {

                isBig = true;
                break;
            }
            printLine += curr + " ";
            curr++;
        }

        console.log(printLine);
        printLine = "";

        if (isBig) {
            break;
        }        
    }
}
pyramid(15);