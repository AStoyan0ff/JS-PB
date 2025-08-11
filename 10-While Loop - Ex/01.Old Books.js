function book(input) {

    let myBook = input[0];
    let cnt = 1;
    let bFirstBook = false;
    let currBook = input[cnt];

    while (currBook !== "No More Books") {

        if (currBook === myBook) {
            bFirstBook = true;
            break;
        }
        cnt++;
        currBook = input[cnt];
    }

    if (bFirstBook === false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${cnt - 1} books.`);
    }
    else {
        console.log(`You checked ${cnt - 1} books and found it.`)
    }
}
book([

    "Troy",
    "Stronger",
    "Life Style",
    "Troy"
]);

book([
    
    "The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"
]);