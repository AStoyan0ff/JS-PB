function vacation(budget, season) {

    let destination = '';
    let holiday = '';
    let spent = 0;

    if (budget <= 100) {
        destination = 'Bulgaria';

        if (season === 'summer') {

            holiday = 'Camp';
            spent = budget * 0.30;
        }
        else {

            holiday = 'Hotel';
            spent = budget * 0.70;
        }
    }
    else if (budget <= 1000) {
        destination = 'Balkans';

        if (season === 'summer') {

            holiday = 'Camp';
            spent = budget * 0.40;
        }
        else {

            holiday = 'Hotel';
            spent = budget * 0.80;
        }
    }
    else {

        destination = 'Europe';
        holiday = 'Hotel';
        spent = budget * 0.90;
    }

    amountSpent = spent.toFixed(2);

    console.log(`Somewhere in ${destination}`);
    console.log(`${holiday} - ${amountSpent}`);
}
vacation(50, "summer");     
vacation(75, "winter");     
vacation(312, "summer");     
vacation(678.53, "winter"); 
vacation(1500, "summer"); 