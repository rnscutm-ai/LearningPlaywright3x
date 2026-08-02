
function greet (name){
    return `Hello, ${name}!`
}



const greet1 = function(name1){
    return `Hello, ${name1}!`;
}
 
// Arrow function
// If you want to make normal fn to arrow fn
// Remove keyword function, remove keyword return, remove the curly braces

const greet2 = (name2) => `Hello, ${name2}!`;
 console.log(greet("Mahesh"));
 console.log(greet1("Suresh"));
 console.log(greet2("Rajesh"));