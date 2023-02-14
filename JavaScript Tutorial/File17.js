//  Map, Reduce & Filter :: Array Methods ::


// map() ::
// map() creates a new array from calling a function for every 
// array element.
// map() calls a function once for each element in an array.
// map() does not execute the function for empty elements.
// map() does not change the original array.
// map() creates a new array
// map() does not change original array

// let num = [ 2, 4, 5, 1, 3];
// let newArray = num.map(function(curElement, index, arr){
//      return arr;
// })
 
// console.log(newArray);



// filter ::

// filter() method creates a new array filled with elements 
// that pass a test provided by a function.
// filter() method does not execute the function for empty 
// elements.
// filter() method does not change the original array.

// let ages = [ 22, 33, 12,11, 20, 18 ,19];
// let find = ages.filter(function(age){
//     return age<18;
// })

// console.log(find);
 
  



// reduce ::
// reduce() method executes a reducer function for array
//  element.
// reduce() method returns a single value: the function's 
// accumulated result.
// reduce() method does not execute the function for empty array elements.
// reduce() method does not change the original array

 
let num = [1, 3, 4, 5, 44, 55, 77];
let find = num.reduce(function(a, b){
    return a+b;

})
console.log(find);