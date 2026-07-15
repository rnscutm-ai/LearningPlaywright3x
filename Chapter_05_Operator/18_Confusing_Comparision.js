// Rule of thumb: Avoid confusing comparisons in JavaScript. 
// Use strict equality (===) and inequality (!==) operators instead of their abstract counterparts (== and !=)
//  to prevent unexpected type coercion.

// Example of confusing comparison:
let x = 5;
let y = "5";

console.log(x == y); // Output: true (loose equality, type coercion)
console.log(x === y); // Output: false (strict equality, value and datatype comparison)

console.log("" == 0); // Output: true (loose equality, type coercion)
console.log("" === 0); // Output: false (strict equality, value and datatype comparison)

console.log(null == undefined); // Output: true (loose equality, type coercion)
console.log(null === undefined); // Output: false (strict equality, value and datatype comparison)

console.log("0" = 0); // Output: true (loose equality, type coercion)
console.log("0" === 0); // Output: false (strict equality, value and datatype comparison)  

console.log("0" = "0"); // Output: true (loose equality, type coercion)
console.log("0" === "0"); // Output: true (strict equality, value and datatype comparison)

console.log("" == "0"); // Output: false (loose equality, 0 is not equal to an empty string)
console.log("" === "0"); // Output: false (strict equality, value and datatype comparison)

