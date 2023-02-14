// Error Handling :
// :: try & catch in JavaScript ::

// The try statement allows you to define a block of code to be
//  tested for errors while it is being executed.
// The catch statement allows you to define a block of code to
//  be executed, if an error occurs in the try block.
 
 
/*

 In try we can give multiple code statement if any one 
 code statement come error then they not execute next line of 
 code catch() method  catch error and show error
*/ 
 
   
 
//  if we use settimeout inside try and give error inside try
// then it give own error and try, catch not work because try,catch
// is synchronous and setTimeout is Asynchronous
 

  try{
     add();
  }catch(error){
    // console.log("Error is Comming");
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

  }