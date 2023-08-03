//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

const countries = ["India", "Australia", "Bangladesh", "China", "Denmark", "Egypt", "France", "Germany", "Hungary", "Italy", "Japan", "Kuwait", "Lebanon", "Maldives", "Netherlands", "Philippines", "Qatar", "Russia", "Singapore", "Turkey", "United States of America", "Venezuela", "Yemen", "Zimbabwe"];

if (countries.includes("Ethiopia")) {
    console.log("ETHIOPIA");
} else {
    countries.push("Ethiopia");
    console.log(countries);
}