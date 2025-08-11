function printSum(input) {

    let target = Number(input[0]);
    let result = 0;
    let idx = 1;

    while (result < target) {

        let number = Number(input[idx]);
        result += number;
        idx++;
    }
    console.log(result);
}
printSum(["100", "10", "20", "30", "40"]);        // 100
printSum(["20", "1", "2", "3", "4", "5", "6"]);  //   21