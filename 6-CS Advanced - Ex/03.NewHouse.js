function homeGarden(flower, qty, budget) {

    const price = {

        'Roses': 5,
        'Dahlias': 3.80,
        'Tulips': 2.80,
        'Narcissus': 3,
        'Gladiolus': 2.50
    };

    let totalCost = qty * price[flower];

    switch(flower) {

        case 'Roses':

            if (qty > 80) {
                totalCost *= 0.90;
            }
            break;

        case 'Dahlias':
            
        if (qty > 90) {
            totalCost *= 0.85;
        }
        break;

        case 'Tulips':

            if (qty > 80) {
                totalCost *= 0.85;
            }
            break;
            
        case 'Narcissus':

            if (qty < 120) {
                totalCost *= 1.15;
            }    
            break;

        case 'Gladiolus':

            if (qty < 80) {
                totalCost *= 1.20;
            }    
            break;
    }

    let diff = Math.abs(budget - totalCost).toFixed(2);

    if (budget >= totalCost) {
        console.log(`Hey, you have a great garden with ${qty} ${flower} and ${diff} leva left.`);
    }
    else {
        console.log(`Not enough money, you need ${diff} leva more.`);
    }
}
homeGarden("Roses", 55, 250);      // 25.00
homeGarden("Tulips", 88, 260);     // 50.56
homeGarden("Narcissus", 119, 360); // 50.55
homeGarden("Dahlias", 112, 460);   // 98.24
