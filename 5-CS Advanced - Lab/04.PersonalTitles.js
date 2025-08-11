function title(age, gender) {

    if (gender === 'm') {
        return age >= 16 ? "Mr." : "Master";
    }
    else {
        return age >= 16 ? "Ms." : "Miss";
    }
}
console.log(title(12, "f"));    // "Miss"
console.log(title(17, "m"));    // "Mr."
console.log(title(25, "f"));    // "Ms."
console.log(title(13.5, "m"));  // "Master"