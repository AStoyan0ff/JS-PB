function areaFigures(input, a, s) {

    switch (input) {

        case "square":
            return (a * a).toFixed(3);

        case "rectangle":
            return (a * s).toFixed(3);

        case "circle":
            return (Math.PI * Math.pow(a, 2)).toFixed(3);

        case "triangle":
            return ((a * s) / 2).toFixed(3);

        default:
            return "error";
    }
}

console.log(areaFigures('square', 5));              // "25.000"
console.log(areaFigures('rectangle', 7, 2.5));      // "17.500"
console.log(areaFigures('circle', 6));              //"113.097"
console.log(areaFigures('triangle', 4.5, 20));      // "45.000"

