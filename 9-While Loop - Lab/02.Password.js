function pass(data) {

    let user = data[0];
    let pass = data[1];
    let input = data[2];
    let pos = 3;

    while(input !== pass) {

        input = data[pos];
        pos++;
    }
    console.log(`Welcome ${user}!`);
}
// Test Out
pass([ 

"Nakov",
"1234",
"Pass",
"1324",
"1234"
]);

pass([

    "Gosho", 
    "secret", 
    "secret"  
]);