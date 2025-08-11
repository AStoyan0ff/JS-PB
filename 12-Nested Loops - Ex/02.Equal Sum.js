function equalSum(first, second) {

    let input = '';

    for (let pos = first; pos <= second; pos++) {

        let curr = String(pos); // "" + pos
        let odd = 0;
        let even = 0;
        
        for (let idx = 0; idx < curr.length; idx++) {
            let currDigit = Number(curr.charAt(idx));

            if (idx % 2 === 0) {
                even += currDigit;
            }
            else {
                odd += currDigit;
            }
        }

        if (odd === even) {
            input += `${pos} `;    
        }
    }
    console.log(input);
}
equalSum(100000, 100050);
equalSum(123456, 124000);