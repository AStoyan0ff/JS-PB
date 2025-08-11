function fastFurious(speed) {

    if (speed <= 10) {
        return "slow";
    }
    else if (speed <= 50) {
        return "average";
    }
    else if (speed <= 150) {
        return "fast";
    }
    else if (speed <= 1000) {
        return "ultra fast";
    }
    else {
        return "extremely fast";
    }
}

console.log(fastFurious(8));
console.log(fastFurious(49.5));
console.log(fastFurious(126));
console.log(fastFurious(160));
console.log(fastFurious(3500));

