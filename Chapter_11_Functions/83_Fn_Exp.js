
function greet1 (name1){
    return `Hello, ${name1}`;
}

// function as expression
const greet = function(name){
    return `Hello, ${name}`;
}
console.log(greet("Raj"));
console.log(greet1("Ramesh"));