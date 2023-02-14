// Get & Set Method DOM in JavaScript


// DOM Get Method ::

// innerText:
// It change the text of tag

// innerHTML:
// It change the html tag

// getAttribute:
// It give the attribute value 

// getAttributeNode:
// It give full attribute like : class="header"

// attribute:
// It return all attribute which are present
   

// let element = document.querySelector(".heads").innerText;
// console.log(element);


// let element = document.querySelector("#prs").getAttribute("onclick");
// console.log(element);



// let element = document.querySelector("#prs").getAttributeNode("onclick").value;
// console.log(element);




// let element = document.querySelector("#prs").attributes;
// console.log(element);







// DOM Set Method ::

// innetText:
// innerHTML:
// setAttribute:
// The setAttribute() method sets a new value to an attribute.
// If the attribute does not exist, it is created first.
// It take to parameter attribute name and value


// attribute:
// in this we change the attribute value using array index no.

// removeAttribute:
// It remove the attribute , we give attribute name 
 
 

 
// let element = document.querySelector("#prs").innerText="MY NAme is Aman"
// console.log(element);


// let element = document.querySelector("#prs").innerHTML="<h1>New Tag</h1>"
// console.log(element);


 
// let element = document.querySelector("#prs").setAttribute("class","newClass")
// console.log(element);


// let element = document.querySelector("#prs").attributes[1].value="clickHere()"
// console.log(element);


let element = document.querySelector("#prs").removeAttribute("onclick")
console.log(element);




console.log(document.body.innerHTML);