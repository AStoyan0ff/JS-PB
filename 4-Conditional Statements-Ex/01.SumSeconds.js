function sum(fTime, sTime, tTime) {

    let totalTime = fTime + sTime + tTime;

    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    let totalSeconds = seconds.toString().padStart(2, "0");
    return `${minutes}:${totalSeconds}`;
}

console.log(sum(35, 45, 44));  // "2:04"
console.log(sum(22, 7, 34));   // "1:03"
console.log(sum(50, 50, 49));  // "2:29"
console.log(sum(14, 12, 10));  // "0:36"

