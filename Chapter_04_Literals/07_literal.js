// Literal is a variable value that is written directly in the code. It represents a fixed value that does not change during the execution of the program. In JavaScript, literals can be of various types, including:

// 1. Numeric Literals: Represent numbers, both integers and floating-point numbers.

let integerLiteral = 42; // Integer literal
let floatLiteral = 3.14; // Floating-point literal
let negativeLiteral = -10; // Negative numeric literal
let exponentialLiteral = 1.5e3; // Exponential notation literal (1.5 * 10^3)
let pi = 3.14159; // numeric literal representing the mathematical constant pi
let largeNumber = 1_000_000; // Numeric literal with underscores for readability (1 million)    
let binaryLiteral = 0b1010; // Binary literal (10 in decimal)




// 2. String Literals: Represent sequences of characters enclosed in single quotes, double quotes, or backticks.
let singleQuoteLiteral = 'Hello, World!'; // Single-quoted string literal
let doubleQuoteLiteral = "Hello, World!"; // Double-quoted string literal
let backtickLiteral = `Hello, World!`; // Backtick-quoted string literal (template literal)
let templateLiteral = `The value of integerLiteral is: ${integerLiteral}`; // Template literal with expression

// 3. Boolean Literals: Represent the two boolean values, true and false.
let trueLiteral = true; // Boolean literal representing true
let falseLiteral = false; // Boolean literal representing false
let isGreaterThan = integerLiteral > 10; // Boolean literal resulting from a comparison

// 4. Null Literal: Represents the intentional absence of any object value.
let nullLiteral = null; // Null literal
let isNull = nullLiteral === null; // Boolean literal resulting from a comparison with null

// 5. Undefined Literal: Represents a variable that has been declared but has not been assigned a value.
let undefinedLiteral; // Undefined literal (variable declared but not assigned a value)
let isUndefined = undefinedLiteral === undefined; // Boolean literal resulting from a comparison with undefined


// typeOf operator can be used to check the type of a literal
console.log(typeof Age); // Output: "number"
console.log(typeof Name); // Output: "string"
console.log(typeof isStudent); // Output: "boolean"
console.log(typeof nullValue); // Output: "object" (this is a known quirk in JavaScript)
console.log(typeof undefinedLiteral); // Output: "undefined"
console.log(typeof pi); // Output: "number"
console.log(typeof largeNumber); // Output: "number"
console.log(typeof binaryLiteral); // Output: "number"

