// Callback In JavaScript ::


// Defination ::
// A callback is a function passed as an argument to another 
// function. This technique allows a function to call another
// function. A callback function can run after another function
// has finished.

// Function inside another function is called callback function
// A callback function can run after another function has finished
 
//  function myFun(b){
//     console.log("MyFun is run");
//     b();
//  }
// myFun(function b(){
//     console.log("b is running");
// })

function a(first){
    
    setTimeout(function(){
        console.log("a is running");
        first()
    },2000)
}
 
a(function b(){
    console.log("b is running");
});



