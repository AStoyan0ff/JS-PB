function delivery (weight, type, distance) {

    let kmPrice = 0;

    if (weight < 1) {
        kmPrice = 0.03;
    }
    else if (weight < 10) {
        kmPrice = 0.05;
    }
    else if (weight< 40) {
        kmPrice = 0.10;
    }
    else if (weight < 90) {
        kmPrice = 0.15;
    }
    else if (weight <= 150) {
        kmPrice = 0.20;
    }

    let totalPrice = kmPrice * distance;

    if (type === "express") {
        let rate = 0;

        if (weight < 1) {
            rate = 0.80;
        }
        else if (weight < 10) {
            rate = 0.40;
        }
        else if (weight < 40) {
            rate = 0.05;
        }
        else if (weight < 90) {
            rate = 0.02;
        }
        else if (weight <= 150) {
            rate = 0.01;
        }

        let chargeKm = kmPrice * rate;
        let totalCharge = chargeKm * weight * distance;

        totalPrice += totalCharge;
    }
     console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${totalPrice.toFixed(2)} lv.`);
}

//delivery(1.5, "standard", 100);
//delivery(87, "express", 130);