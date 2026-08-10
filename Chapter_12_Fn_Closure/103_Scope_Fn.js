// Scope in Functions

let env = "Staging"; // global Scope

function setUpConfig() {
  let timeout = "3000"; // local Scope
  console.log(env); // Staging, can access global variable
  console.log(timeout); // 3000, can access local variable
}

setUpConfig();
console.log(env); // Staging, can access global variable
console.log(timeout); // ReferenceError: timeout is not defined, cannot access local variable

//-----

let g_x = 10; // global Scope

function outer() {
  let x = 20; // local Scope
  function inner() {
    let y = 30; // local Scope
  console.log(x); // 10, can access global variable
  }
  inner();
console.log(y); // ReferenceError: y is not defined, outer cannot access inner value
}

