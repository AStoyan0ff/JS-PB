function football(first, second, third) {

    let matches = [first, second, third];

    let win = 0;
    let lose = 0;
    let draw = 0;

    for (let result of matches) {

        let hosts = Number(result[0]);
        let other = Number(result[2]);

        if (hosts > other) {
            win++;
        } 
        else if (hosts < other) {
            lose++;

            
        } 
        else {
            draw++;
        }
    }

    console.log(`Team won ${win} games.`);
    console.log(`Team lost ${lose} games.`);
    console.log(`Drawn games: ${draw}`);
}

football("3:1", "0:2", "0:0");
football("4:2", "0:3", "1:0");
football("0:2", "0:1", "3:3");

