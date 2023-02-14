// Throw & Finaly in JavaScript

// throw() ::
// The throw statement allows you to create a custom error.
// throw me hum custom error bana sakte hai, for ex we check input
// only required num, or enter only value in inp b/w 5 to 20
 
   function myFun(){
    let x = document.getElementById("inp").value ;
    try{
        if(x == "") throw "Input is Empty";
        if(isNaN(x)) throw "Please Enter Number";
        if(x<5) throw "Enter grater Number";
        if(x>20) throw "Enter less Number"
        else{
            document.querySelector("h1").innerHTML="Number is :"+x;
        }
    }catch(err){
        console.log(err);
    }finally{
        console.log("Program Executing");
    }
   }

// finally ::
// it run in both condition false, True 

















































//
// function myFun(){
//     let x = document.getElementById("inp").value ;

//     try{
//         if(x == "") throw "input is empty";
//         if(isNaN(x)) throw "enter a number";
//         if(x<5) throw "enter greater number";
//         if(x>20) throw "enter less number"
//         else{
//           document.querySelector("h1").innerHTML=x
//         }
//     }catch(error){
//            console.log(error);
//     }finally{
//         console.log("Program is run");
//     }
// }
















