// Nested Loop in JavaScript

// loop inside another loop is called nested loop
// we take any loop inside another loop

  let i=0;
  while(i<3){
    console.log("Number is : "+ i);
    for(a=0;a<3;a++){
        console.log("New Number is : "+a);
    }
    i++;
  }