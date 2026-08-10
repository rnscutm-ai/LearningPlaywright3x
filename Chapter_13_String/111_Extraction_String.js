// Extracting Substrings from a String

let str = "JavaScript is a versatile programming language.";

// Using slice() method to extract a substring, negative indices can be used to count from the end of the string
console.log(str.slice(0, 10)); // Outputs: JavaScript
console.log(str.slice(11, 13)); // Outputs: is
console.log(str.slice(-8)); // Outputs: language.

// Using substring() method to extract a substring, it does not accept negative indices
console.log(str.substring(0, 10)); // Outputs: JavaScript
console.log(str.substring(11, 13)); // Outputs: is
console.log(str.substring(11)); // Outputs: is a versatile programming language.

// Using at() method to extract a character at a specific index (ES2022)
console.log(str.at(0)); // Outputs: J
console.log(str.at(-4)); // Outputs: a (accessing the fourth last character using at() method)