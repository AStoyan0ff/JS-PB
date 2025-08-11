function boat(budget, season, fisher) {
    
    let price;
    switch (season) {

        case 'Spring':
            price = 3000;
            break;

        case 'Summer':
        case 'Autumn':
            price = 4200;
            break;

        case 'Winter':
            price = 2600;
            break;

        default:
            return;
    }
    
    let discount = 0;

    if (fisher <= 6) {
        discount = 0.10; 
    } 
    else if (fisher <= 11) {
        discount = 0.15; 
    } 
    else {
        discount = 0.25; 
    }

    let totalCost = price * (1 - discount);
   
    if (fisher % 2 === 0 && season !== 'Autumn') {
        totalCost *= 0.95; 
    }
    
    const diff = Math.abs(budget - totalCost).toFixed(2);

    if (budget >= totalCost) {
        return `Yes! You have ${diff} leva left.`;
    } 
    else {
        return `Not enough money! You need ${diff} leva.`;
    }
}
console.log(boat(3000, "Summer", 11)); 
console.log(boat(3600, "Autumn", 6));  
console.log(boat(2000, "Winter", 13)); 