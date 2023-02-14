// Promise Challenge :

// write program using promise which give resilt after 3 second

let pro = new Promise(function(resolve, reject){

    setTimeout(function(){
       let API = true;
       if(API){
        resolve("Promise resolve....")
       }else{
        reject("Promise rejected....")
       }
    },1000)
})

console.log(pro);
async function check(){
    let data = await pro;
    console.log(data);
    
}
check();
