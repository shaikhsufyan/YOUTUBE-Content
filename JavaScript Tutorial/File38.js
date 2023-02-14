// Date & Time in JavaScript ::

// it show the current date and time
// We have "new Date() Method which complete Date & Time"
 
/*
 What is Date and Time in JS?
 In JavaScript, date and time are represented by the Date object.
 The Date object provides the date and time information and also
 provides various methods. A JavaScript date defines the 
 EcmaScript epoch that represents milliseconds since 1 January 
 1970 UTC.

 :JavaScript count month from 0 to 11
date: year,month,date
Time: hour, minute, second

*/
// Date & Time
//  new Date()::
let date  = new Date();
// console.log(date);
 


// Date.now():
// It give millisecond from 1 January 1970 
// console.log(Date.now());
 


 

// getMethod()
// We get the Time, Hour, minute, second, milliSecond
//  console.log(date.getHours());
// console.log(date.getMilliseconds());

// getMethod() Date :
 
// toLocaleString()
// console.log(date.toLocaleString());
// toLocaleDateString()
// console.log(date.toLocaleDateString());

// toLocaleTimeString()
// console.log(date.toLocaleTimeString());

// getFullYear() 
// console.log(date.getFullYear());

// Date ::

// getFullYear()
// getMonth()
// console.log(date.getDate());
// getDay()
// getDate()
 

// Time ::

// getHours()
// console.log(date.getSeconds());
// getMinutes()
// getSeconds()
// getMilliseconds() 



// Set Method ::
// Using set method we set time ourself 
// console.log(date);
// setDate27);
// setMonth(3);
// setHours(6);
// setMinutes(27);
// setSeconds(27);
// setFullYear(2027);
 

console.log(date.setFullYear(2025));
console.log(date);


