// Call by Value
let x = 5;
let y = x; // y gets a copy of x's value
x = 10; // Changing x does not affect y
console.log(x); // Output: 10
console.log(y); // Output: 5

// Call by Reference
let obj1 = { name: "Alice" };
let obj2 = obj1; // obj2 references the same object as obj1
obj1.name = "Bob";
console.log(obj1.name); // Output: Bob
console.log(obj2.name); // Output: Bob
