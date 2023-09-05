//let firstname = "Sangishetty";
//let lastname = "Mounika"
//console.log(firstname, lastname);
//console.log("My name is", firstname, lastname);
//console.log(`My name is ${firstname} ${lastname}`);

//let x=20;
//let y=10;
//let z=x+y;
//console.log(z);

//console.log(x+y);
//console.log(x-y);
//console.log(x*y);
//console.log(x/y);
//console.log(x%y);

//let abc=10;
//let xyz=20;
//console.log(abc>xyz);
//console.log(abc<xyz);
//console.log(abc>=xyz);
//console.log(abc<=xyz);

//let abc=20;
//let xyz='20';
//console.log(abc==xyz);
//console.log(abc===xyz);

//let age=16;
//if(age==18){
//    console.log("You are allowed inside the park");
//}
//console.log("Out of the park");

//let age=16;
//if(age>=18){
//    console.log("You are allowed inside the park");
//}else{
//    console.log("Out of the park");
//}

//let gender="male";
//if(gender=="female"){
//    console.log("Yes, you are allowed");
//}else{
//    console.log("No, you are not allowed");
//}

//let standard=4;
//if(standard==1){
//    console.log("Room 1");
//}else if(standard==2){
//    console.log("Room 2");
//}else if(standard==3){
//    console.log("Room 3");
//}else{
//    console.log("You are Principal");
//}

//let rating=2;
//if(rating==5){
//    console.log("5 stars");
//}else if(rating==4){
//    console.log("4 stars");
//}else if(rating==3){
//    console.log("3 stars");
//}else{
//    console.log("i am else")
//}

//let user="user";
//switch(user){
//    case "Admin":
//    console.log("Redirect him/her to the Admin Page");
//    break;
//    case "Mentor":
//   console.log("Redirect him/her to the Mentor dashboard");
//    break;
//    default:
//        console.log("I am a simple user")
//}

//let raining=true;
//raining?console.log("It is raining"):console.log("It is not raining");

//let userlogin=false;
//userlogin?console.log("log out"):console.log("log in");

//let name=["Ramakrishna","Mounika","Teja","Aravind","Varalakshmi","jagadeesh","Ruhanshika"];
//console.log(name);
//console.log(name[4]);

//let bankaccount={
//    firstname: "Sangishetty",
//    lastname: "Mounika",
//    accountno: 32343536378390,
//    balance: 1000
//};
//console.log(bankaccount);
//console.log(bankaccount.balance);

//const now=new Date();
//console.log(now);
//console.log(now.toString());
//console.log(now.getFullYear());
//console.log(now.getMonth());
//console.log(now.getDay());
//console.log(now.getDate());
//console.log(now.getTime());
//console.log(now.getHours());
//console.log(now.getMinutes());
//console.log(now.getHours(),":",now.getMinutes());
//console.log(now.getSeconds());

//const PI=Math.PI;
//console.log(PI);
//console.log(Math.round(PI));
//console.log(Math.round(9.8));
//console.log(Math.round(9.5));
//console.log(Math.floor(9.5));
//console.log(Math.ceil(9.5));

//console.log(Math.min(10,20,15,12,9,4));
//console.log(Math.max(10,20,15,12,9,4));

//console.log(Math.random());
//console.log(Math.random()*10);
//console.log(Math.round(Math.random()*51));
//console.log(Math.pow(4,5));
//console.log(Math.log(1));
//console.log(Math.tan(180));

//let i=6;
//do{
//    console.log("Value of i is:",i);
//    i++;
//}while(i<=5);

//let i=5;
//let j=1;
//do{
//    console.log(i,"*",j,"=",i*j);
//    j++;
//}while(j<=5);

//let j=6;
//while(j<=5){
//    console.log("value of j is:",j);
//    j++;
//}

//for(let i=0;i<=5;i++){
//    console.log("value of i is:",i);
//}

//for(let j=6,i=0;i<=5;i++){
//    console.log(`${j}*${i}=${j*i}`);
//}

let names=["Ramakrishna","Mounika","Teja","Aravind","Varalakshmi","jagadeesh","Ruhanshika"];
//console.log(names);
//console.log(names.length);
//console.log(names[4]);
//console.log(names.length-2);
//names[5]="Padma";
//console.log(names);
//let names=new Array("Ramakrishna", "Mounika");
//console.log(names);

//names.push("Padma");
//console.log(names);

//console.log(names.slice(1,4));

//let flower=["lily","rose","jasmine","marigold","sunflower"];
//flower.splice(2,1,"tulips","lavender");
//console.log(flower);

//let arr1=[1,2,3,4];
//let arr2=[4,5,6,7];
//console.log(arr1.concat(arr2));
//let arr3=[8,9,6,2];
//console.log(arr1.concat(arr2,arr3));
//let arr4=[2,4,6,7,8,3,9,0];
//console.log(arr1.concat(arr2,arr3,arr4));

//let flower=["lily","rose","jasmine","marigold","sunflower"];
//flower.fill("tulips",2,5);
//console.log(flower);

//let num=[1,2,3,4,5,6,7,8];
//console.log(num.includes(5,6));

//let num=[1,2,3,4,5,6,7,8];
//console.log(num.indexOf(1));

//let num1=[1,2,3,"krishna","mounika","ruhanshika",4,5,6];
//let num2="teja";
//console.log(Array.isArray(num1));
//console.log(Array.isArray(num2));

//let num=[1,2,3,4,5,6,7,8];
//console.log(num.join("-"));

//let num1=[1,2,3,"krishna","mounika","ruhanshika",4,5,6,"krishna","mounika","ruhanshika"];
//console.log(num1.lastIndexOf("mounika"));

//let maths=[4,16,36,64,100,144];
//console.log(maths.map(Math.sqrt));

//let maths=[4,16,36,64,100,144];
//console.log(maths.pop());
//console.log(maths);

//let maths=[4,16,36,64,100,144];
//console.log(maths.reverse());

//let maths=[4,16,36,64,100,144];
//console.log(maths.shift());
//console.log(maths);

//let names=["Ramakrishna","Mounika","Teja","Aravind","Varalakshmi","Jagadeesh","Ruhanshika"];
//console.log(names.sort());
//console.log(names.reverse(names.sort()));
//let flower=["lily","rose","jasmine","marigold","sunflower","tulips","lavender"];
//console.log(flower.sort());

//let flower=["lily","rose","jasmine","marigold","sunflower"];
//console.log(flower.unshift("tulips","lavender"));
//console.log(flower);

//let fruit="Pappaya";
//let array1=fruit.split('');
//console.log(array1);

//let flower=["lily","rose","jasmine","marigold","sunflower","tulips","lavender"];
//let Upperflower=[];
//for(const uppercase of flower){
//    Upperflower.push(uppercase.toUpperCase());
//}
//console.log(Upperflower);

//for(let i=0;i<=10;i++){
//    if(i==6){
//        break;
//    }
//    console.log(i);
//}

//for(let i=0;i<=5;i++){
//    if(i==3){
//        continue;
//    }
//    console.log(i);
//}

//Function

//function sum(){
//    let num1=16;
//    let num2=25;
//    console.log("Addition of two numbers are:",num1+num2);
//}
//sum();

//function sum(val1,val2){
//    console.log("Addition of two numbers are:",val1+val2);
//}
//sum(45,64);
//sum(16,25);

//function sum(value1,value2){
//    let result=value1+value2;
//    return result;
//}
//let add=sum(10,25);
//console.log(add);

//let add1=sum(11,26);
//console.log(add1);

//function URL(url,domain){
//    let con="https://";
//    let result=con+url+domain;
//    return result;
//}
//let flipkartsite=URL("www.flipkart",".in");
//console.log(flipkartsite);

//function sum(arr){
//    let sum=0;
//    for(let i=0;i<arr.length;i++){
//        sum=sum+arr[i];
//    }
//    return sum;
//}
//let sumarray=[1,2,3,4,5,6];
//let arrresult=sum(sumarray);
//console.log(arrresult);

//function multiplication(arr1){
//    let mul=1;
//    for(let i=0;i<arr1.length;i++){
//        mul=mul*arr1[i];
//    }
//    return mul;
//}
//let mularray=[1,2,3,4,5,6,7,8,9];
//let result=multiplication(mularray);
//console.log(result);

//function sub(){
//    let sub=0;
//    for(let i=0;i<arguments.length;i++){
//        sub=sub-arguments[i];
//    }
//    return sub;
//}
//console.log(sub(-51,1,2,3,4,5));

//let movie=()=>{
//    console.log("The movie name is Radheshyam");
//}
//movie();

//let mul=(val1,val2)=>{
//    console.log("Multiplication of two numbers is:",val1*val2);
//}
//mul(10,5);

//object
//let userName={
//    firstname: "Mounika",
//    lastname: "Sangishetty",
//    role: "student",
//    logincount: 25,
//};
//console.log(userName);
//console.log(userName.role);
//userName.logincount=60;
//console.log(userName);

//for in

//for(let x in userName){
//    console.log(x);
//}

//for(let x in userName){
//    console.log(userName[x]);
//}
 
/*let value="0123456789ABCDEF";
console.log(value[5]);*/

//console.log("5" !== 5);

//console.log(1 + '1' - 1);

//console.log(`"5"+2`);

//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.shift();
//console.log(fruits);

let myname = "mounika";
console.log(myname);

