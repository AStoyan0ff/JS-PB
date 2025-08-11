function checkDays(hour, day) {

    // Just in case --> 'If the user enters different data'
    if (typeof hour !== 'number' || hour < 0 || hour > 23) {
        return 'Invalid hour';
    }

    const workingDays = [

        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    if (workingDays.includes(day) && hour >= 10 && hour < 18) {
        return 'open';
    }
    else {
        return 'closed';
    }
}
console.log(checkDays(11, 'Monday'));  // open
console.log(checkDays(19, 'Friday'));  // closed
console.log(checkDays(11, 'Sunday'));  // closed

