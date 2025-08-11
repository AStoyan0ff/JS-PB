function cinemaTickets(input) {

    let pos = 0;
    let totalTickets = 0;
    let studentCount = 0;
    let standardCnt = 0;
    let kidCnt = 0;

    while (input[pos] !== "Finish") {

        let movieName = input[pos++];
        let freeSeats = Number(input[pos++]);

        let ticketsThisMovie = 0;

        while (input[pos] !== "End" && input[pos] !== "Finish") {

            let ticketType = input[pos++];
            ticketsThisMovie++;
            totalTickets++;

            if (ticketType === "student") {
                studentCount++;
            } 
            else if (ticketType === "standard") {
                standardCnt++;
            } 
            else if (ticketType === "kid") {
                kidCnt++;
            }

            if (ticketsThisMovie >= freeSeats) break;
        }

        let percentFull = (ticketsThisMovie / freeSeats) * 100;
        console.log(`${movieName} - ${percentFull.toFixed(2)}% full.`);

        if (input[pos] === "End") {
            pos++;
        }
    }

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((studentCount / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardCnt / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidCnt / totalTickets) * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets([

    "Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"
]);
