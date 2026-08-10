// Strings are sequences of characters used to represent text in programming. 
// In JavaScript, strings can be created using single quotes (' '), 
// double quotes (" "), or backticks (` `) for template literals. 
// Strings can contain letters, numbers, symbols, and whitespace.

let url = "https://www.example.com/path/to/resource?query=string#fragment";
let status = 'pass';
let message = `The status of the operation is: ${status}`;
 
// Single quotes
let singleQuoteString = 'This is a string in single quotes.';

// Double quotes
let doubleQuoteString = "This is a string in double quotes.";

// Backticks (template literals)
let backtickString = `This is a string in backticks.`;

//Multiple line 
let report = `
Test: Login
Status: ${status}
Duration: 5 seconds
`;

console.log(String(200));
console.log(String(true));
console.log(String(null));
console.log(String([1, 2, 3])); 
