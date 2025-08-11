function daysType(input) {

    const workingDays = [

        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
    ];
    const weekendDays = [
        
        "Saturday",
        "Sunday"
    ];

    if (workingDays.includes(input)) {
        console.log("Working day");
    }
    else if (weekendDays.includes(input)) {
        console.log("Weekend");
    }
    else {
        console.log("Error");
    }
}
daysType("Monday");
daysType("Sunday");
daysType("April");


