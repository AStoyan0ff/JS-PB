function time(hours, minutes) {

    let totalMin = minutes + 15;
    let newHours = hours;

    if (totalMin >= 60) {

        newHours += Math.floor(totalMin / 60);
        totalMin = totalMin % 60;
    }
    newHours = newHours % 24;

    let formatMin = totalMin.toString().padStart(2, '0');
    return `${newHours}:${formatMin}`;
}

// Tested
console.log(time(1, 46));   // "2:01"
console.log(time(0, 1));    // "0:16"
console.log(time(23, 59));  // "0:14"
console.log(time(11, 8));   // "11:23"
console.log(time(12, 49));  // "13:04"
