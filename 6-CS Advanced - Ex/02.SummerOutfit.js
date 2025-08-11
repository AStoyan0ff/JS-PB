function out(degrees, time) {

    let outfit, shoes;

    if (degrees >= 10 && degrees <= 18) {
        if (time === "Morning") {

            outfit = "Sweatshirt";
            shoes = "Sneakers";
        }
        else if (time === "Afternoon" || time === "Evening") {

            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }
    else if (degrees > 18 && degrees <= 24) {
        if (time === "Morning") {

            outfit = "Shirt";
            shoes = "Moccasins";
        }
        else if (time === "Afternoon") {

            outfit = "T-Shirt";
            shoes = "Sandals";
        }
        else {

            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }
    else if (degrees >= 25) {
        if (time === "Morning") {

            outfit = "T-Shirt";
            shoes = "Sandals";
        }
        else if (time === "Afternoon") {

            outfit = "Swim Suit";
            shoes = "Barefoot";
        }
        else {

            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }
    return (`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}
console.log(out(16, 'Morning'));
console.log(out(22, 'Afternoon'));
console.log(out(28, 'Evening'));
