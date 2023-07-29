//function a(){
//    console.log("I was called by a function");
//}

//function b(){
//    a();
//}
//b();

//const callback = (n) => {
//    return n ** 2;
//}
//function cube(callback,n){
//    return callback(n)*n;
//}
//console.log((cube(callback,3)));

//for each

//const arr=["hey","hi","hello","hola","namaste"];
//arr.forEach(myfun);
//function myfun(val){
//    console.log(val);
//}

//const arr=["hey","hi","hello","hola","namaste"];
//arr.forEach((val) => {
//    console.log(val);
//});

//setTimeout(() => {
//    console.log("Hello FSJS2");
//},3000);

//another way
//function time(){
//    console.log("hello fsjs2");
//}
//setTimeout(time,3000);

//setInterval

//setInterval(() => {
//    console.log("Hello");
//},1000);

//map
//const numbers=[1,2,3,4,5,6];
//const numSqu=numbers.map((num) => num*num);
//console.log(numSqu);

//filter

//const count=["India","Pakistan","Canada","Ireland","Japan","Kenya","Finland","Germany","Srilanka","Bharat"];
//const store=count.filter((val) => val.includes("land"));
//console.log(store);

//reduce
//const num=[1,2,3,4,5,6,7];
//const sum=num.reduce((acc,curr) => acc+curr, 0);
//console.log(sum);

//sort
//const names=["Anurag","Anirudh","Hitesh sir","Vyom","Bishal","Mayur","Snehal","Momin","Surya"];
//console.log(names.sort());
//console.log(names.reverse(names.sort()));

//find
//const ages=[15,16,14,18,20];
//const checkage = ages.find((val) => val>18);
//console.log(checkage);

//every
//const ages=[22,17,19,18,20];
//const checkage = ages.every((val) => val>16);
//console.log(checkage);

//some
//const ages=[24,18,15,22,20];
//const checkage = ages.some((val) => val>18);
//console.log(checkage);

//Destructuring and Spread and Rest
//const sci = [2.72,3.14,9.81,37,100];
//let [e,pi,grav,bodytemp,boiltemp] = sci;
//console.log(e,pi,grav,bodytemp,boiltemp);

//const arr1=[1,2,3];
//let [var1,var2]=arr1;
//console.log(var1,var2);

//const arr2=[1,2,3,4,5,6,7,8];
//let [num1,num2,...rest]=arr2;
//console.log(num1,num2);
//console.log(rest);

//spread and rest ...
//function sumone(x,y){
//    return x+y;
//}
//let vari=[5,7];
//console.log(sumone(...vari)); //spread

//rest
//function sum(...args){ //rest operator
//    let sum=0;
//    for(const x of args){
//        sum=sum+x;
//    }
//    return sum;
//}
//console.log(sum(1,2,3,4,5,6,7,8,9,10));

//Try and catch
//try{
//    console.log(Anurag);
//}catch(err){
//    console.log(err.name);
//}
//try{
//    database
//}catch(err){
//    console.log("database request failed");
//}
//try{
//    let firstname="Anurag";
//    console.log(firstname+" "+lastname);
//}catch(err){
//    console.log("Variable name missing");
//}finally{
//    console.log("I will run");
//}

//Event loop

//const useOne = () =>{
//    console.log("Hello One");
//};
//const useTwo = () => {
//    setTimeout(() => {
//        console.log("Hello I am inside");
//    }, 3000);
//    console.log("Hello Two");
//};
//const useThree = () => {
//    console.log("Hello Three");
//};
//useOne();
//useTwo();
//useThree();

//promise

//const one = () => {
//    return "I am One";
//};
//const two = () => {
//    return "I am Two";
//};
//const three = () => {
//    return "I am Three";
//};
//const CallMe = () => {
//    let valone = one();
//    console.log(valone);
//    let valtwo = two();
//    console.log(valtwo);
//    let valthree = three();
//    console.log(valthree);
//};
//CallMe();

//const one = () => {
//    return "Index Page";
//};
//const two = () => {
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            resolve("Credential Correct");
//        }, 3000);
//    });
//};
//const three = () => {
//    return "Redirect to home page";
//};
//const CallMe = async () => {
//    let valone = one();
//    console.log(valone);
//    let valtwo = await two();
//    console.log(valtwo);
//    let valthree = three();
//    console.log(valthree);
//};
//CallMe();

const makePromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        const arrone =["HTML","CSS","javascript","tailwind"];
        if (arrone.length>0) {
            resolve("Complete")
        } else {
            reject("Incomplete")
        }
    }, 2000);
});
makePromise.then((result) => {
    console.log(result);
}).catch((result) => {
    console.log(result);
})