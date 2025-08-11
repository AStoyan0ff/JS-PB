function snookerTickets(stage, type, cnt, photo) {
    let ticketPrices = 0;
   
    const pricesList = {

        "Quarter final": { "Standard": 55.50, "Premium": 105.20, "VIP": 118.90 },
        "Semi final": { "Standard": 75.88, "Premium": 125.22, "VIP": 300.40 },
        "Final": { "Standard": 110.10, "Premium": 160.66, "VIP": 400.00 }
    };

    ticketPrices = pricesList[stage][type];
    let total = ticketPrices * cnt;
   
    if (total > 4000) {
        total *= 0.75; 
       
    } 
    else if (total > 2500) {
        total *= 0.90; 

        if (photo === 'Y') {
            total += cnt * 40;
        }
    } 
    else {

        if (photo === 'Y') {
            total += cnt * 40;
        }
    }

    console.log(total.toFixed(2));
}

snookerTickets("Final", "Premium", 25, 'Y');          // 3012.38
snookerTickets("Semi final", "VIP", 9, 'Y');          // 2793.24
snookerTickets("Quarter final", "Standard", 11, 'N'); //  610.50
