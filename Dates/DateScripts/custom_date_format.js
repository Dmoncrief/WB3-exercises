"use strict"

// grab the current date
let currentDate = new Date();


// Define for month names and weeekday names
const monthNames = ['January', 'February','March','April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekdayNames = ['Sunday', 'Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday', 'Sunday'];


// Take each day and month, year, and weekday
let day = currentDate.getDate();
let month = monthNames[currentDate.getMonth()];
let year = currentDate.getFullYear();
let weekday = weekdayNames[currentDate.getDay()];


// Display in specific format
console.log(`${day}-${month}-${year}(${weekday})`);