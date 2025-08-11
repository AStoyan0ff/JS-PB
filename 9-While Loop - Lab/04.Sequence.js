function print(input) {
    
    let number = Array.isArray(input) 
        ? Number(input[0]) 
        : Number(input);

    let cnt = 1;

    while (cnt <= number) {

        console.log(cnt);
        cnt = cnt * 2 + 1;
    }
}

print("31");