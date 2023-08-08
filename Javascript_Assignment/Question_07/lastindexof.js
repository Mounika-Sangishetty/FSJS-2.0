// Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

let array = ["mounika", "manasa", "pw skills", "mallika", "anusha", "pushpa", "pw skills", "bindu", "lalitha", "radha", "pw skills", "alekya"];

let array1 = array.lastIndexOf("pw skills");
let array2 = array.lastIndexOf("pw skills", 3);
console.log("The last occurance of a word (pw skills) is:", array1);
console.log("The first occurance of a word (pw skills) is:", array2);
