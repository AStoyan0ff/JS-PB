function classAnimal(input) {

    const animals = {

        dog: "mammal",
        crocodile: "reptile",
        tortoise: "reptile",
        snake: "reptile",
    };
    console.log(animals[input] || "unknown");
}
classAnimal("dog");
classAnimal("snake");
classAnimal("cat");