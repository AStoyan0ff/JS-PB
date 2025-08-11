function checkItems(products) {

    if (products === "banana"
        || products === "apple"
        || products === "kiwi"
        || products === "cherry"
        || products === "lemon"
        || products === "grapes") {

        console.log("fruit");
    }
    else if (products === "tomato"
        || products === "cucumber"
        || products === "pepper"
        || products === "carrot") {

        console.log("vegetable");
    }
    else {
        console.log("unknown");
    }

}

checkItems("banana");
checkItems("apple");
checkItems("tomato");
checkItems("water");


