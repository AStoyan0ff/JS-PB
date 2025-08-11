function warsGame(input) {

    let idx = 0;

    const firstPlayer = input[idx++];
    const secondPlayer = input[idx++];

    let firstPoints = 0;
    let secondPoints = 0;

    while (idx < input.length) {
        const firstInput = input[idx++];

        if (firstInput === "End of game") {

            console.log(`${firstPlayer} has ${firstPoints} points`);
            console.log(`${secondPlayer} has ${secondPoints} points`);

            return;
        }

        const secondInput = input[idx++];

        const firstCard = Number(firstInput);
        const secondCard = Number(secondInput);

        if (firstCard > secondCard) {
            firstPoints += firstCard - secondCard;
        } 
        else if (secondCard > firstCard) {
            secondPoints += secondCard - firstCard;
        } 
        else {
            
            console.log("Number wars!");
            const warCardOne = Number(input[idx++]);
            const warCardTwo = Number(input[idx++]);

            if (warCardOne > warCardTwo) {
                console.log(`${firstPlayer} is winner with ${firstPoints} points`);
            } 
            else {
                console.log(`${secondPlayer} is winner with ${secondPoints} points`);
            }
            return;
        }
    }
}
warsGame([
    "Elena",
    "Simeon",
    "6",
    "3",
    "2",
    "5",
    "8",
    "9",
    "End of game"
])


