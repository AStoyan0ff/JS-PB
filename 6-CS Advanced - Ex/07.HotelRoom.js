function rooms(month, nights) {

    const price = {

        studio: {

            'May': 50,
            'October': 50,
            'June': 75.20,
            'September': 75.20,
            'July': 76,
            'August': 76
        },

        apartment: {

            'May': 65,
            'October': 65,
            'June': 68.70,
            'September': 68.70,
            'July': 77,
            'August': 77
        }
    };

    let studioCost = price.studio[month] * nights;
    let apartmentCost = price.apartment[month] * nights;

    if ((month === 'May' || month === 'October') && nights > 14) {
        studioCost *= 0.70;
    }
    else if ((month === 'May' || month === 'October') && nights > 7) {
        studioCost *= 0.95;
    }
    else if ((month === 'June' || month === 'September') && nights > 14) {
        studioCost *= 0.80;
    }

    if (nights > 14) {
        apartmentCost *= 0.90;
    }

    studioCost = studioCost.toFixed(2);
    apartmentCost = apartmentCost.toFixed(2);

    console.log(`Apartment: ${apartmentCost} lv.`);
    console.log(`Studio: ${studioCost} lv.`);
}

rooms("May", 15);    // Apartment:  877.50 lv. Studio: 525.00 lv.
rooms("June", 14);   // Apartment:  961.80 lv. Studio: 1052.80 lv.
rooms("August", 20); // Apartment: 1386.00 lv. Studio: 1520.00 lv.