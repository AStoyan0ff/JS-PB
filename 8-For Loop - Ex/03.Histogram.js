function his(input) {

    let N = input[0];
    let numbers = input.slice(1, N + 1);
    
    let p1 = 0, p2 = 0, p3 = 0, p4 = 0, p5 = 0;
    
    for (let num of numbers) {

        if (num < 200) {
            p1++;
        } 
        else if (num <= 399) {
            p2++;
        } 
        else if (num <= 599) {
            p3++;
        } 
        else if (num <= 799) {
            p4++;
        } 
        else {
            p5++;
        }
    }
    
    let total = N;

    let percente = [

        (p1 / total * 100).toFixed(2),
        (p2 / total * 100).toFixed(2),
        (p3 / total * 100).toFixed(2),
        (p4 / total * 100).toFixed(2),
        (p5 / total * 100).toFixed(2)
    ];
    
    return percente.join('% \n') + '%';
}


console.log(his([3, 1, 2, 999]));
console.log(his([7, 800, 801, 250, 199, 399, 599, 799]));
console.log(his([9, 367, 99, 200, 799, 999, 333, 555, 111, 9]));
console.log(his([14, 53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200]));