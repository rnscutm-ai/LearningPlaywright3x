// Comparision Operators
// The comparision operators are used to compare two values and return a boolean value (true or false).

let x = 5;
let y = 10;

console.log(x == y); // Output: false
console.log(x != y); // Output: true
console.log(x < y); // Output: true
console.log(x > y); // Output: false
console.log(x <= y); // Output: true 
console.log(x >= y); // Output: false
console.log(x === y); // Output: false
console.log(x !== y); // Output: true
console.log(x == "5"); // Output: true (loose equality, value comparison with type coercion)
console.log(x === "5"); // Output: false (strict equality, value and datatype comparison)
console.log(x != "5"); // Output: false (loose inequality, type coercion)
console.log(x !== "5"); // Output: true (strict inequality, value and datatype comparison)
console.log(x < "10"); // Output: true (loose comparison, type coercion)
console.log(x > "10"); // Output: false (loose comparison, type coercion)
console.log(x <= "10"); // Output: true (loose comparison, type coercion)
console.log(x >= "10"); // Output: false (loose comparison, type coercion)
console.log(x < "5"); // Output: false (loose comparison, type coercion)
console.log(x > "5"); // Output: false (loose comparison, type coercion)    
