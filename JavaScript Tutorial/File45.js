//  Local Variable & Global Variable In JavaScript

// global variable which is outside function
// global variable work inside and outside function

// Local variable which is inside a function
// Local variable only access inside function We can not access
// outside function 
 
 let a = 10;

 function get(){
    let b = 50;
    console.log(b);
     console.log(a);
 }
 get();
 console.log(b);
 console.log(a);
