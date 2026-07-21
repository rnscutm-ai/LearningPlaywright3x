// string operators

let str1 = "Hello";
let str2 = "World";
let str3 = str1 + " " + str2; // Concatenation
console.log(str3); // Output: "Hello World" 

let s = "Hi";
console.log(s + " there!"); // Output: "Hi there!"

s += " everyone"; // Concatenation assignment
console.log(s); // Output: "Hi everyone"

console.log("Hello" + " " + "World"); // Output: "Hello World"
console.log("Hello".concat(" ", "World")); // Output: "Hello World"
console.log("Hello", "Ravi"); // Output: "Hello Ravi" (comma operator, not concatenation)
console.log("Hello" + 5); // Output: "Hello5" (number is converted to string)
console.log("Hello" + true); // Output: "Hellotrue" (boolean is converted to string)
console.log(1,2,3, "Hello", true); // Output: 1 2 3 Hello true (comma operator, not concatenation)
