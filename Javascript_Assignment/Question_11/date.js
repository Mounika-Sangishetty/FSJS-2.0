// Use the Date object to do the following activities
//    - What is the year today?
//    - What is the month today as a number?
//    - What is the date today?
//    - What is the day today as a number?
//    - What is the hours now?
//    - What is the minutes now?
//    - Find out the numbers of seconds elapsed from January 1, 1970 to now.

const now = new Date();
console.log("The year of today is:", now.getFullYear());
console.log("The month of today as a number is:", now.getMonth());
console.log("The date of today is:", now.getDate());
console.log("The day of today as a number is:", now.getDay());
console.log("The hours of now is:", now.getHours());
console.log("The minutes of now is:", now.getMinutes());
let milliseconds = Date.now(); // the number of milliseconds since January 1, 1970
let seconds = milliseconds / 1000;
console.log("The number of seconds elapsed from January 1, 1970 to now is:", seconds);