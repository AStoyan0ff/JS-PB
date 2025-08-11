function skeleton(minutes, secounds, length, time) {

    let controlTime = (minutes * 60) + secounds;
    let totalTime = (length / 100) * time;
    let timeRed = (length / 120) * 2.5;

    let fTime = totalTime - timeRed;

    if (fTime <= controlTime) {

        console.log("Marin Bangiev won an Olympic quota!");
        console.log(`His time is ${fTime.toFixed(3)}.`);
    }
    else {
        
        let diff = fTime - controlTime;
        console.log(`No, Marin failed! He was ${diff.toFixed(3)} second slower.`);
    }
}

skeleton(2, 12, 1200, 10);
skeleton(1, 20, 1546, 12);
