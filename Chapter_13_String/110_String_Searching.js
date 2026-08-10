// Searching and Checking for Strings

// In JavaScript, you can search for substrings within a string using methods like 
// indexOf(), includes(), and startsWith().
// These methods help determine if a string contains a specific substring or 
// starts with a certain prefix.

let url = "https://www.example.com/path/to/resource?query=string#fragment";
//includes() method checks if a substring exists within the string  
console.log(url.includes("example")); // Outputs: true
console.log(url.includes("nonexistent")); // Outputs: false

//indexOf() method returns the index of the first occurrence of a substring, or -1 if not found
console.log(url.indexOf("example")); // Outputs: 12
console.log(url.indexOf("nonexistent")); // Outputs: -1
console.log(url.indexOf("a")); // Outputs: 31 (returns the index of the first occurrence of 'a' in the string)
console.log(url.lastIndexOf("a")); // Outputs: 31 (returns the index of the last occurrence of 'a' in the string)

//startsWith() method checks if a string starts with a specific prefix
console.log(url.startsWith("https")); // Outputs: true
console.log(url.startsWith("http")); // Outputs: false
console.log(url.endsWith("fragment")); // Outputs: true