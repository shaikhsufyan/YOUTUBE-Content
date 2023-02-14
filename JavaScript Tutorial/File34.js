// Async & Await in JavaScript
 
// async await return promise
// async print also promise without using .then() and catch()
// Also using async for delaying time
 
 
// await wait for promise to return
// await not work without async

// EXAMPLE 1
  
let promises = new Promise(function(resolve, reject){

    setTimeout(function(){
       let API =true;
       if(API){
        resolve("Promise FullFilled")
       }else{
        reject("Promise Rejected")
       }
    },4000)
});

async function check(){
    let data = await promises;
    console.log("Executing");
    console.log(data);
}
let a = check();
console.log(a);