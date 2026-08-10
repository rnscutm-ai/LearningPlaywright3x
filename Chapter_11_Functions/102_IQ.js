greet("Alice"); // not a good coding practice

function greet(name) {
    console.log(`Hello, ${name}!`);
    return `Hello, ${name}!`;
}                                    


sayHi("Bob"); // ReferenceError: Cannot access 'sayHi' before initialization

const sayHi = function(name) {
    return `Hi, ${name}!`;
}