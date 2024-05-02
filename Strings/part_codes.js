"use strict"


function getSupplier(code) {
    // find the index of the colon
    let colonIndex = code.indexOf(':');


    // Take characters before the colon
    return code.substring(0, colonIndex);

}


function getProductNumber(code) {

// Find the index of the colon and hyphen
let colonIndex = code.indexOf(':');
let hyphenIndex = code.indexOf('-');



// Extract charcacters between the colon and hyphen
return code.substring(colonIndex + 1, hyphenIndex);

}


function getSize(code) {
    let hyphenIndex = code.indexOf('-');

    // Extract characters after the hyphen
    return code.substring(hyphenIndex + 1);


}


// Test cases
console.log("Supplier:",getSupplier("ACME:123-L"));
console.log("Product Number:", getProductNumber("ACME:123-L"));
console.log("Size:", getSize("ACME:123-L"));

console.log("Supplier:" , getSupplier("DI:12345-M"));
console.log("Product Number:" , getProductNumber ("DI:12345-M"));
console.log("Size:", getSize("DI:12345-M"));


console.log("Supplier:" , getSupplier("ACE:1-12"));
console.log("Product Number:" , getProductNumber ("ACE:1-12"));
console.log("Size:", getSize("ACE:1-12"));