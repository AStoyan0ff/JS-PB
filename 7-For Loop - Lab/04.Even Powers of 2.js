function print(N) {

    for (let pos = 0; pos <= N; pos += 2) {
        console.log(Math.pow(2, pos));
    }
}
print(7);