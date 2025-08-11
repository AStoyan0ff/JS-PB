function read(word) {

    let idx = 0;

    while(word[idx] !== "Stop") {

        console.log(word[idx]);
        idx++
    }
}

read([

"Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"

]);

read([

    "Sofia",
    "Berlin",
    "Moscow",
    "Athens",
    "Madrid",
    "London",
    "Paris",
    "Stop",
    "AfterStop"
    
]);