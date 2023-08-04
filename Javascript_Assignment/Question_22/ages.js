// The following is an array of 10 students ages:
//    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//    - Sort the array and find the min and max age
//    - Find the median age(one middle item or two middle items divided by two)
//    - Find the average age(all items divided by number of items)
//    - Find the range of the ages(max minus min)
//    - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//    - Sort the array and find the min and max age
console.log("The sorted order is:", ages.sort());
console.log("The minimum age of the array is:", ages[0]);
console.log("The maximum age of the array is:", ages[ages.length-1]);

//    - Find the median age(one middle item or two middle items divided by two)
let value = ages.length;
if(value % 2 != 0){
    let value1 = ages[Math.floor(value / 2)];
    console.log("The median age is:", value1);
} else{
    let value2 = ((ages[value / 2]) + (ages[(value / 2) - 1])) / 2;
    console.log("The median age is:", value2);
}

// - Find the average age(all items divided by number of items)
function sum() {
    let total = 0;
    for(let i = 0; i < ages.length; i++) {
        total = total + ages[i];
    }
    return total;
}
let result = sum(ages);
let avg = result / (ages.length);
console.log("The average age is:", avg);

//  - Find the range of the ages(max minus min)
let max = ages[ages.length-1];
let min = ages[0];
let range = max - min;
console.log("The range of the ages is:", range);

// - Compare the value of (min - average) and (max - average), use abs() method
let val1 = Math.abs(ages[0] - avg); // (min - average)
let val2 = Math.abs((ages[ages.length-1]) - avg); // (max - average)
if(val1 > val2){
    console.log("The value of (min - average) is greater than (max - average)");
}else if(val1 < val2){
    console.log("The value of (min - average) is lesser than (max - average)");
}else {
    console.log("The value of (min - average) is equal to (max - average)");
}