let a = {status: "pass", message: "Operation completed successfully."};
console.log(String(a)); // Outputs: "[object Object]"
console.log(a.status); // Outputs: "pass"
console.log(a.message); // Outputs: "Operation completed successfully."
console.log(a["status"]); // Outputs: "pass"

let b = {status: 'fail'};
console.log(b.status); // Outputs: "fail"

// Keys are case sensitive
let c = {Status: 'pending'};
console.log(c.Status); // Outputs: "pending"
console.log(c.status); // Outputs: undefined

// copy the reference of object a to object d
let d = a;
console.log(d.status); // Outputs: "pass"
console.log(d.message); // Outputs: "Operation completed successfully."

let e = {status: "error"};
let f = e; // copy the reference of object e to object f
f.status= "skipped"; // change the value of status in object f
console.log(e.status); // Outputs: "skipped"
console.log(f.status); // Outputs: "skipped"

//-------------
console.log("--- Object Comparison ---");
let g = {status: "pass"};
let h = {status: "pass"};
console.log(g === h); // Outputs: false

// JSON object
const t_json = {"name": "John", "age": 30, "city": "New York"}; // keys with double quotes
console.log(t_json.name); // Outputs: "John"
console.log(t_json.age); // Outputs: 30
console.log(t_json.city); // Outputs: "New York"


// Object
const t_object = {name: "John", age: 30, city: "New York"}; // keys without quotes
console.log(t_object.name); // Outputs: "John"
console.log(t_object.age); // Outputs: 30
console.log(t_object.city); // Outputs: "New York"
