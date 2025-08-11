function specialDigits(N) {

    let result = [];

    for (let num = 1111; num <= 9999; num++) {

        let numStr = num.toString();
        let isSpecial = true;

        for (let digitChar of numStr) {
            let digit = Number(digitChar);
            
            if (digit === 0 || N % digit !== 0) {

                isSpecial = false;
                break;
            }
        }

        if (isSpecial) {
            result.push(num);
        }
    }

    console.log(result.join(" "));
}
specialDigits(11);
specialDigits(3);
//specialDigits(16);