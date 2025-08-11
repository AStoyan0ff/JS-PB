function holidayPlan(data) {

    let cnt = 0;

    while (data[cnt] !== "End") {

        let destination = data[cnt++];
        let needMoney = Number(data[cnt++]);
        let saveMoney = 0;

        while (saveMoney < needMoney) {

            let qty = Number(data[cnt++]);
            saveMoney += qty;
        }

        console.log(`Going to ${destination}!`);
    }
}

holidayPlan([

    "Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"
]);

holidayPlan([

    "France", 
    "2000", 
    "300", 
    "300", 
    "200", 
    "400", 
    "190", 
    "258", 
    "360", 
    "Portugal", 
    "1450", 
    "400", 
    "400", 
    "200", 
    "300", 
    "300", 
    "Egypt", 
    "1900", 
    "1000", 
    "280", 
    "300", 
    "500", 
    "End"
]);