// Use the Date object to do the following activities
//    - What is the year today?
//    - What is the month today as a number?
//    - What is the date today?
//    - What is the day today as a number?
//    - What is the hours now?
//    - What is the minutes now?
//    - Find out the numbers of seconds elapsed from January 1, 1970 to now.

const now = new Date();
const date = new Date('January 1, 1970');
console.log("The year of today is:", now.getFullYear());
console.log("The year of today is:", date.getFullYear());
console.log(date.getSeconds());
console.log(now-date);
console.log("The month of today as a number is:", now.getMonth());
console.log("The date of today is:", now.getDate());
console.log("The day of today as a number is:", now.getDay());
console.log("The hours of now is:", now.getHours());
console.log("The minutes of now is:", now.getMinutes());
console.log("The number of seconds elapsed from January 1, 1970 to now is:", );