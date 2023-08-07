// Write a program to print all the prime number between 0 to 100 (0 and 100 included).

for(let i = 0; i <= 100; i++){  
  let k = 0;   
    for(let j = 1; j <= i ; j++ ){
        if( i % j == 0){
           k = k + 1;
        }
    }
    if(k == 2){
      console.log(i);
    }
}
