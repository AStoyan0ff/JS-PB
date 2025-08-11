function waterTank(length, width, height, percent) {

    let volume = length * width * height;
    let water = volume / 1000;

    let occupied = percent / 100;
    let needed = water * (1 - occupied);

    return needed;
}
console.log(waterTank(85, 75, 47, 17));     // 248.68875
console.log(waterTank(105, 77, 89, 18.5));  // 586.445475
