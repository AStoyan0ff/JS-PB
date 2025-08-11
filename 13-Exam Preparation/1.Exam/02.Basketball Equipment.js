function equipment(fee) {

    let sneakers = fee * 0.6;
    let outFit = sneakers * 0.8;
    let ball = outFit / 4;
    let accsess = ball / 5;

    let total = fee + sneakers + outFit + ball + accsess;

     console.log(total.toFixed(2));
}

equipment(550);
