function worldRecord(record, distance, time) {

    let swimmingTime = distance * time;
    let delay = Math.floor(distance / 15);
    let totalDelay = delay * 12.5;
    let finalTime = swimmingTime + totalDelay;

    if (finalTime < record) {

        console.log(
            `Yes, he succeeded! The new world record is ${finalTime.toFixed(2)} seconds.`);
    }
    else {
        
        let diff = finalTime - record;

        console.log(
            `No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }
}
worldRecord(10464, 1500, 20);
worldRecord(55555.67, 3017, 5.03);
