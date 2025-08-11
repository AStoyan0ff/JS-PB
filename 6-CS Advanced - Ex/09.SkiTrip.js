function callVacation(days, room, rating) {
   
    const nights = days - 1;
    const prices = {

        'room for one person': 18.00,
        'apartment': 25.00,
        'president apartment': 35.00
    };
   
    let totalCost = nights * prices[room];
    
    if (room === 'apartment') {

        if (nights < 10) {
            totalCost *= 0.70; 
        } 
        else if (nights <= 15) {
            totalCost *= 0.65;
        } 
        else {
            totalCost *= 0.50; 
        }
    } 
    else if (room === 'president apartment') {

        if (nights < 10) {
            totalCost *= 0.90;
        } 
        else if (nights <= 15) {
            totalCost *= 0.85; 
        } 
        else {
            totalCost *= 0.80; 
        }
    }
    
    if (rating === 'positive') {
        totalCost *= 1.25; 
    } 
    else if (rating === 'negative') {
        totalCost *= 0.90; 
    }
   
    console.log(totalCost.toFixed(2));
}
callVacation(14, "apartment", "positive");           // 264.06
callVacation(30, "president apartment", "negative"); // 730.80
callVacation(12, "room for one person", "positive"); // 247.50
callVacation(2, "apartment", "positive");            //  21.88