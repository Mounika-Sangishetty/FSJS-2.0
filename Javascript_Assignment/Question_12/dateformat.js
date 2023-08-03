// Create a human readable time format using the Date time object
//    - YYYY-MM-DD HH:mm
//    - DD-MM-YYYY HH:mm
//    - DD/MM/YYYY HH:mm

const now = new Date();
let date = now.getDate();
date = zero(date);
let month = now.getMonth() + 1;
month = zero(month);
let year = now.getFullYear();
let hours = now.getHours();
hours = zero(hours);
let minutes = now.getMinutes();
minutes = zero(minutes);

function zero(num) {
    if (num < 10) {
        num = '0' + num;
        return num;
    } else {
        return num;
    }
}

console.log(`${year}-${month}-${date} ${hours}:${minutes}`);
console.log(`${date}-${month}-${year} ${hours}:${minutes}`);
console.log(`${date}/${month}/${year} ${hours}:${minutes}`);