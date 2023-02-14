// Promise in JavaScript ::

// If any one promise then they compelete promise or reject 
// promise or pending promise

// Mostly We use promise for fetching API
// value get karne ke liye promise ki .then & catch() method use karte hai


// in promise we have  ::
// resolve, reject, pending


 
let pro = new Promise(function(resolve, reject){
    setTimeout(function(){
        let API = true;
        if(API){
           resolve("My promise resolved");
        }else{
           reject("My promise is rejected")
        }
    },3000)
});

let data= pro;
console.log(data);

pro.then(function(resolve){
    console.log(resolve);
}).catch(function(reject){
    console.log(reject);
})


 
 











































// let pro = new Promise(function (resolve, reject){
  
//      setTimeout(function (){
//         let rollNo = [1,2,3,4,5];
//         if(rollNo){
//           resolve("Roll Number is :"+ rollNo)
//         }else{
//             reject("Not Present")
//         }
//      },2000)
// });

// function data(){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//            let bioData={
//             name : "sufyan",
//             age : "20"
//            }
//            if(bioData){
//             resolve("My name is "+bioData.name +"and my age is "+bioData.age);

//            }else{
//             reject("not Finding")
//            }
//         },4000)
//     })
// }
// data().then(function( ){
//     console.log("Getting my bioData");
// }).catch(function(reject){
//     console.log(reject);
// })


// pro.then(function(resolve){
//     console.log(resolve);
// }).catch(function(err){
//     console.log(err);
// })













 