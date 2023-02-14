// addEventListner

// This is new way

// previous we write event in html and apply on javascript file
// so lot time consume .so using addEventLister we give event
// and function in one file 
 

// document.getElementById("btn").addEventListener("click", myFun);

// function myFun(){
//     document.body.style.backgroundColor="green";
// }


document.getElementById("btn").addEventListener("click", function func(){
    document.querySelector("h1").innerHTML="We Learn addEventLister :"
});

