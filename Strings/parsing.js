"use strict"

function parseAndDisplayName(fullName) {
    // find the position
    let spaceIndex = fullName.indexOf(' ');


// Extract first and last names

let firstName = fullName.substring(0, spaceIndex);
let lastName = fullName.substring(spaceIndex + 1);



// Display the results 
console.log("Name:", fullName);
console.log("First name:", firstName);
console.log("Last name:", lastName);

}



// test cases 
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");
