# JavaScript Functions

## What is a Function?

A **function** is a reusable block of code that performs a task. It takes **inputs (parameters)**, does work, and optionally **returns** a result.

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
```

---

## 1. Function Declarations vs Expressions

### Function Declaration (hoisted)

```javascript
function greet(name) {
  return "Hello, " + name;
}
greet("John"); // "Hello, John"
```

> **Hoisting:** declarations are moved to the top of their scope, so you can call them **before** they appear in the code.

```javascript
console.log(sayHi("Sam")); // works! "Hi, Sam"

function sayHi(name) {
  return "Hi, " + name;
}
```

### Function Expression (not hoisted)

```javascript
const greet = function (name) {
  return "Hello, " + name;
};

greet("John"); // "Hello, John"
// greet2("John") BEFORE the line above → TypeError (not hoisted)
```

---

## 2. Arrow Functions

The modern, concise syntax.

```javascript
// regular function
function add(a, b) { return a + b; }

// arrow function
const add = (a, b) => a + b;
```

### Implicit vs Explicit Return

```javascript
const double = n => n * 2;        // implicit return (single expression, no braces)
const add = (a, b) => a + b;      // parentheses needed for 2+ params

const getGreeting = name => {     // braces → need explicit return
  const msg = "Hello, " + name;
  return msg;
};
```

### Arrow with No Parameters

```javascript
const now = () => new Date();
```

### ⚠️ Arrow Functions Have No `this` of Their Own

```javascript
const timer = {
  seconds: 0,
  start() {
    // regular function → own `this` → undefined/wrong
    // setInterval(function () { this.seconds++; }, 1000);  ❌

    // arrow inherits `this` from enclosing scope ✅
    setInterval(() => this.seconds++, 1000);
  },
};
```

**Rule:** arrows capture `this` from where they are **defined**, not where they are called.

---

## 3. Parameters & Arguments

### Default Parameters

```javascript
function greet(name = "Guest") {
  return "Hello, " + name;
}

greet();        // "Hello, Guest"
greet("John");  // "Hello, John"
```

### Rest Parameters `...` — Collect Extra Arguments

```javascript
function sum(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}

sum(1, 2, 3);    // 6
sum(1, 2, 3, 4); // 10
```

### The `arguments` Object (old way)

```javascript
function logAll() {
  console.log(arguments); // array-like of all args
}
logAll(1, "two", true);
```

---

## 4. Return Values

```javascript
function multiply(a, b) {
  return a * b;
}
multiply(3, 4); // 12

function noReturn() {
  // no return statement
}
noReturn(); // undefined
```

> A function without a `return` (or with an empty `return;`) returns `undefined`.

---

## 5. Callback Functions

A **callback** is a function passed **into** another function and called later.

```javascript
function process(items, callback) {
  for (const item of items) {
    callback(item);
  }
}

process([1, 2, 3], n => console.log(n * 2)); // 2 4 6
```

### Callbacks in Array Methods

```javascript
let scores = [40, 80, 93];

scores.map(s => s > 70 ? "pass" : "fail");   // ["fail", "pass", "pass"]
scores.filter(s => s >= 70);                 // [80, 93]
scores.reduce((sum, s) => sum + s, 0);       // 213
scores.forEach(s => console.log(s));
```

---

## 6. Immediately Invoked Function Expressions (IIFE)

Runs **immediately** after definition — useful for scoping.

```javascript
(function () {
  console.log("runs right away");
})();

// arrow version
(() => console.log("also runs right away"))();
```

---

## 7. Closures

A **closure** is a function that "remembers" the variables from the scope where it was created, even after that scope has exited.

```javascript
function counter() {
  let count = 0;
  return function () {
    count++;           // remembers `count`
    return count;
  };
}

const next = counter();
next(); // 1
next(); // 2
next(); // 3
```

### Private Variables via Closures

```javascript
function createBankAccount(initial) {
  let balance = initial;                 // NOT accessible from outside
  return {
    deposit(amount) { balance += amount; },
    getBalance() { return balance; },
  };
}

const acct = createBankAccount(100);
acct.deposit(50);
acct.getBalance(); // 150
// acct.balance → undefined (private!)
```

---

## 8. Higher-Order Functions

A function that **takes a function as an argument** or **returns a function**.

```javascript
// returns a function
function multiplier(factor) {
  return n => n * factor;
}

const double = multiplier(2);
const triple = multiplier(3);

double(10); // 20
triple(10); // 30
```

---

## 9. Function Methods: `call`, `apply`, `bind`

Control what `this` is inside a function.

```javascript
const person = { name: "John" };

function greet(prefix) {
  return prefix + " " + this.name;
}

greet.call(person, "Mr.");        // "Mr. John"  → args one by one
greet.apply(person, ["Mr."]);     // "Mr. John"  → args in an array

const bound = greet.bind(person); // returns a NEW function
bound("Mr.");                     // "Mr. John"
```

| Method | Invokes immediately? | Arguments |
|--------|---------------------|-----------|
| `call` | ✅ yes | listed one by one |
| `apply` | ✅ yes | array |
| `bind` | ❌ no, returns new fn | listed one by one |

---

## 10. Generators (Bonus)

Functions that can pause and resume, producing values on demand.

```javascript
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const gen = idGenerator();
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3
```

---

## Quick Reference

```
┌────────────────────────────────────────────────┐
│          FUNCTION CHEATSHEET                   │
├────────────────────────────────────────────────┤
│ Declare:   function name() {}                  │
│ Express:   const f = function () {}            │
│ Arrow:     const f = (a, b) => a + b           │
│ Defaults:  function f(a = 10) {}               │
│ Rest:      function f(...args) {}              │
│ Callback:  arr.map(fn)                         │
│ IIFE:      (function(){})()                    │
│ Closure:   function remembers outer vars       │
│ this:      fn.call(obj)  fn.apply(obj, [])     │
│            fn.bind(obj)  → new function        │
└────────────────────────────────────────────────┘
```
