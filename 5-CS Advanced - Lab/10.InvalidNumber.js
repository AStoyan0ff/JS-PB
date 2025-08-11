function inValid(N) {

    if ((N < 100 || N > 200) && N !== 0) {
        console.log("invalid");
    }
}
inValid(75);    // invalid
inValid(150);
inValid(220);   // invalid
inValid(199);
inValid(200);
inValid(0);
inValid(100);
inValid(-1);    // invalid
