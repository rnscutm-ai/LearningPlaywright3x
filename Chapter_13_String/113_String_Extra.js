let url = "https://www.example.com/path/to/resource?query=string#fragment";
console.log(url.replace("example", "demo")); // Outputs: https://www.demo.com/path/to/resource?query=string#fragment

//split() method splits a string into an array of substrings based on a specified separator
let str = "apple,banana,cherry";
console.log(str.split(",")); // Outputs: [ 'apple', 'banana', 'cherry' ]

// Using regular expressions to split a string into an array of substrings
let str2 = "one1two2three3four";
console.log(str2.split(/\d/)); // Outputs: [ 'one', 'two', 'three', 'four' ] (splits the string at each digit)  

// join() method joins the elements of an array into a single string, with a specified separator
let arr = ["apple", "banana", "cherry"];
console.log(arr.join(", ")); // Outputs: apple, banana, cherry
