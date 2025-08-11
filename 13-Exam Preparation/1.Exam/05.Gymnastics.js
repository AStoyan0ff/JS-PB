function gym(country, device) {

    let score = {

        "Russia": {

            "ribbon": [9.100, 9.400],
            "hoop": [9.300, 9.800],
            "rope": [9.600, 9.000]
        },

        "Bulgaria": {

            "ribbon": [9.600, 9.400],
            "hoop": [9.550, 9.750],
            "rope": [9.500, 9.400]
        },

        "Italy": {

            "ribbon": [9.200, 9.500],
            "hoop": [9.450, 9.350],
            "rope": [9.700, 9.150]
        }
    };

    let diff = score[country][device][0];
    let exec = score[country][device][1];

    let total = diff + exec;
    let mis = 20 - total;
    let percent = (mis / 20) * 100;

    console.log(`The team of ${country} get ${total.toFixed(3)} on ${device}.`);
    console.log(`${percent.toFixed(2)}%`);
}

gym("Bulgaria", "ribbon");