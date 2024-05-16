"use strict";

function displayMailingLabel(name, address, city, state, zip) {
    console.log(name);
    console.log(address); 
    console.log(city);
    console.log(state);
    console.log(zip);
}

function addNumbers(num1, num2) {
    let result = Number(num1) + Number(num2);
    console.log(num1 + " + " + num2 + " = " + result);
}

function displayReceipt(totalDue, amountPaid) {
    totalDue = Number(totalDue); 
    amountPaid = Number(amountPaid); 
    let changeDue = totalDue - amountPaid;
    if (changeDue > 0) {
        let message = "Please pay the due amount of " + changeDue;
        console.log("TotalDue: $" + totalDue);
        console.log("Amount Paid: $" + amountPaid);
        console.log("Change Due: " + message);
    }
}
