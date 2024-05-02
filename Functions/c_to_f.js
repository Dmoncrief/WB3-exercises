"use strict";

function convertCtoF(celsius) {
    let fahrenheit;

    fahrenheit = (9 / 5 * celsius) + 32;



    return fahrenheit;
}

let input = 80;
let output = convertCtoF(input);
console.log(output);


input = 20;
output = convertCtoF(input);
console.log(output);