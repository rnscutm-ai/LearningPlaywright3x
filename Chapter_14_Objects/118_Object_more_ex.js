const user = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
};
console.log(user); // Output: { name: "John Doe", age: 30, email: "john.doe@example.com" }

// Accessing object properties
console.log(user.name); // Output: John Doe
console.log(user["age"]); // Output: 30

// Adding a new property
user.phone = "123-456-7890";
console.log(user.phone); // Output: 123-456-7890