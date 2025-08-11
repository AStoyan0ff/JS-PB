function championship(input) {

    let stage = input[0];
    let ticketType = input[1];
    let ticketCnt = input[2];
    let photo = input[3];

    let ticketPrice = 0;

    if (stage === "Quarter final") {

        if (ticketType === "Standard") ticketPrice = 55.50;
        else if (ticketType === "Premium") ticketPrice = 105.20;
        else if (ticketType === "VIP") ticketPrice = 118.90;
    } 
    else if (stage === "Semi final") {

        if (ticketType === "Standard") ticketPrice = 75.88;
        else if (ticketType === "Premium") ticketPrice = 125.22;
        else if (ticketType === "VIP") ticketPrice = 300.40;
    } 
    else if (stage === "Final") {

        if (ticketType === "Standard") ticketPrice = 110.10;
        else if (ticketType === "Premium") ticketPrice = 160.66;
        else if (ticketType === "VIP") ticketPrice = 400.00;
    }

    let total = ticketPrice * ticketCnt;

    if (total > 4000) {
        total *= 0.75;
    }
    else if (total > 2500) {
        total *= 0.90;

        if (photo === 'Y' || photo === 'N') {
            total += ticketCnt * 40;
        }
    }
    console.log(total.toFixed(2));
}

championship(["Final", "Premium", "25", "Y"]);
championship(["Semi final", "VIP", "9", "Y"]);
championship(["Quarter final", "Standard", "11", "N"]);