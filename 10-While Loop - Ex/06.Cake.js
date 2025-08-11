function cake(input) {

    width = Number(input[0]);
    length = Number(input[1]);

    let allPieces = width * length;
    let cnt = 2;

    while (cnt < input.length) {
        let cmd = input[cnt];

        if (cmd === "STOP") {

            console.log(`${allPieces} pieces are left.`);
            return;
        }
        
        let getIt = Number(cmd);
        allPieces -= getIt;

        if (allPieces < 0) {

            console.log(`No more cake left! You need ${Math.abs(allPieces)} pieces more.`);
            return;
        }
        cnt++;
    }
}

cake(["10", "10", "20", "20", "20", "20", "21"]);
cake(["10", "2", "2", "4", "6", "STOP"]);
