// Types Of Error in JavaScript ::
  
/*
 Types ::

 Reference Error : which is not present
 Syntax Error :Show Typing mistake
 Type Error : show DataType Error
 Evaluation Error : This error is call when eval() function called
 RangeError :A RangeError is thrown when trying to pass a value
 as an argument to a function that does not allow a range that 
 includes the value.
 URI Error : when wrong character used in URl
 Internal Error :In the JS engine, this error occurs most often
 when there is too much data and the stack exceeds its critical 
 size. 


*/ 
 

let num  = 10;
try{
        // add(); ReferenceError

        // if(true{
        //     // Syntax Error
        // }
        num.toUpperCase();
}catch(error){
    if(error instanceof ReferenceError){
     console.log("ReferenceError");
    }
    if(error instanceof SyntaxError){
        console.log("SyntaxError");
       }
    if(error instanceof TypeError){
     console.log("TypeError");
}

}
 





