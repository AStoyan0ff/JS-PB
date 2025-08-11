function sumVowels(str) {

    const vowelValues = { 'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5 };

    let sum = 0;

    for (let c of str.toLowerCase()) {

        if (vowelValues[c] !== undefined) {
            sum += vowelValues[c];
        }
    }

    console.log(sum);
}

sumVowels("hello");   
sumVowels("hi");     
sumVowels("bamboo");   
sumVowels("beer");     