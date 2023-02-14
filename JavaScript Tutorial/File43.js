// this in JavaScript ::


// this keyword apne parent ko point karta hai

// this keyword refer to the object it belogs to.
// normal or regular function this refer to global object
// in a method this refers to  the owner object
// When we use this keyword alone then it refer to global object
 
 let student = {
     name : "Aman",
     age : 19,
     rollNo : 33,

     check(){
        console.log(this.age);
     }
 }
 
 student.check();

function a(){
     console.log(this);
}
a()
// this points to global object
 