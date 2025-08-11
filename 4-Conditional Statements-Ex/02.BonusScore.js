function f(points) {

    let bonus;

    bonus = points <= 100
        ? 5
        : bonus = points <= 1000
        ? points * 0.20
        : points * 0.10;

    if (points % 2 === 0) {
        bonus += 1;
    }
    else if (points % 10 === 5) {
        bonus += 2;
    }

    return {

        bonusPoints: bonus,
        totalPoints: points + bonus
    };
}
// Test Out

let test = f(20);
console.log(test.bonusPoints);    // 6
console.log(test.totalPoints);    // 26

let test2 = f(175);
console.log(test2.bonusPoints);    // 37
console.log(test2.totalPoints);    // 212

let test3 = f(2703);
console.log(test3.bonusPoints);    // 270.3
console.log(test3.totalPoints);    // 2973.3

let test4 = f(15875);
console.log(test4.bonusPoints);    // 1589.5
console.log(test4.totalPoints);    // 17464.5


