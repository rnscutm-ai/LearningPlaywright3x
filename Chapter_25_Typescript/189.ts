// Primitive types

let name :string = "John Doe";
let age :number = 30;
let isStudent :boolean = true;
let nothing :null = null;
let undefinedValue :undefined = undefined;

// Arrays
let fruits :string[] = ["apple", "banana", "orange"];
let numbers :number[] = [1, 2, 3, 4, 5];
let names :Array<string> = ["Alice", "Bob", "Charlie"];

// Any type (avoid using any type if possible)
let randomValue :any = 10;
randomValue = "Hello";
randomValue = true;

//Unknown type (safer alternative to any type)
let unknownValue :unknown = 10;
unknownValue = "Hello";
unknownValue = true;

let message :string = "Hello, TypeScript!";
let count :number = 42;
console.log("Message:", message);
console.log("Count:", count);
console.log("Is student:", isStudent);
console.log("Name:", name);
console.log("Age:", age);