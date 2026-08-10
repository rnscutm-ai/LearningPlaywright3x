let str = "Hello, World!";
// Using toUpperCase() method to convert the string to uppercase
console.log(str.toUpperCase()); // Outputs: HELLO, WORLD!

// Using toLowerCase() method to convert the string to lowercase
console.log(str.toLowerCase()); // Outputs: hello, world!

// Trim whitespace from both ends of the string using trim() method
let str2 = "   Hello, World!   ";
console.log(str2.trim()); // Outputs: Hello, World!
console.log(str2.trimStart()); // Outputs: Hello, World! (removes whitespace from the start)
console.log(str2.trimEnd()); // Outputs:    Hello, World! (removes whitespace from the end) 

// Replacing parts of a string using replace() method
let str3 = "I love JavaScript!";
console.log(str3.replace("JavaScript", "Python")); // Outputs: I love Python!
console.log(str3.replaceAll("a", "0")); // Outputs: I love J0v0Script! (replaces all occurrences of 'a' with '0')

// Concatenating strings using concat() method
let str4 = "Hello";
let str5 = "World";
console.log(str4.concat(", ", str5, "!")); // Outputs: Hello, World!
console.log(str4 + ", " + str5 + "!"); // Outputs: Hello, World! (using + operator for concatenation)
console.log(`${str4}, ${str5}!`); // Outputs: Hello, World! (using template literals for concatenation)

// Splitting a string into an array of substrings using split() method
let str6 = "apple,banana,cherry";
console.log(str6.split(",")); // Outputs: [ 'apple', 'banana', 'cherry' ]   

//regex to split a string into an array of substrings using split() method
let str7 = "one1two2three3four";
console.log(str7.split(/\d/)); // Outputs: [ 'one', 'two', 'three', 'four' ] (splits the string at each digit)
