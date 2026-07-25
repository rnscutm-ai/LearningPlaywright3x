# JavaScript Keywords

## What is a Keyword?

A **keyword** is a reserved word in JavaScript that has a special meaning to the language. Keywords cannot be used as variable names, function names, or identifiers — they belong to the language itself.

---

## All JavaScript Keywords with Examples

### 1. Variable Declaration

| Keyword | Purpose | Example |
|---------|---------|---------|
| `let` | Declares a block-scoped variable (can be reassigned) | `let a = 10;` |
| `const` | Declares a block-scoped constant (cannot be reassigned) | `const pi = 3.14;` |
| `var` | Declares a function-scoped variable (older style) | `var name = "John";` |

### 2. Control Flow

| Keyword | Purpose | Example |
|---------|---------|---------|
| `if` | Starts a conditional block | `if (x > 5) { }` |
| `else` | Alternate branch for `if` | `if (x) { } else { }` |
| `else if` | Chained conditional | `if (a) { } else if (b) { }` |
| `switch` | Multi-way branching | `switch (x) { case 1: break; }` |
| `case` | A branch inside `switch` | `case "red":` |
| `default` | Fallback case in `switch` | `default: console.log("none");` |
| `break` | Exits a loop or `switch` | `break;` |
| `continue` | Skips to next loop iteration | `continue;` |

### 3. Looping

| Keyword | Purpose | Example |
|---------|---------|---------|
| `for` | Loop with init/condition/increment | `for (let i = 0; i < 5; i++) { }` |
| `while` | Loop while condition is true | `while (x < 10) { x++; }` |
| `do` | Execute block once, then loop | `do { x++; } while (x < 10);` |
| `for...in` | Iterates over object keys | `for (let key in obj) { }` |
| `for...of` | Iterates over iterable values | `for (let val of arr) { }` |

### 4. Function & Scope

| Keyword | Purpose | Example |
|---------|---------|---------|
| `function` | Declares a function | `function add(a, b) { return a + b; }` |
| `return` | Returns a value from a function | `return result;` |
| `async` | Declares an asynchronous function | `async function fetchData() { }` |
| `await` | Waits for a Promise (inside async) | `let data = await fetch(url);` |
| `yield` | Pauses/resumes a generator | `yield value;` |
| `function*` | Declares a generator function | `function* gen() { yield 1; }` |

### 5. Object & Class

| Keyword | Purpose | Example |
|---------|---------|---------|
| `class` | Declares a class | `class Car { }` |
| `new` | Creates an instance of a class | `let car = new Car();` |
| `this` | Refers to the current object context | `this.name = "Tesla";` |
| `super` | Refers to parent class | `super();` / `super.method()` |
| `extends` | Inherits from a parent class | `class SUV extends Car { }` |
| `static` | Defines a static method/property | `static count = 0;` |
| `get` | Defines a getter | `get fullName() { }` |
| `set` | Defines a setter | `set fullName(val) { }` |

### 6. Error Handling

| Keyword | Purpose | Example |
|---------|---------|---------|
| `try` | Wraps code that may throw an error | `try { riskyCode(); }` |
| `catch` | Catches errors from `try` | `catch (err) { console.log(err); }` |
| `finally` | Runs regardless of error or not | `finally { cleanup(); }` |
| `throw` | Throws a custom error | `throw new Error("Oops!");` |

### 7. Data Types & Values

| Keyword | Purpose | Example |
|---------|---------|---------|
| `true` | Boolean true value | `let isReady = true;` |
| `false` | Boolean false value | `let isDone = false;` |
| `null` | Intentional absence of value | `let data = null;` |
| `undefined` | Variable declared but not assigned | `let x; // undefined` |
| `NaN` | Not-a-Number (technically a global property) | `parseInt("abc") // NaN` |
| `Infinity` | Represents mathematical infinity | `1 / 0 // Infinity` |

### 8. Operators & Type

| Keyword | Purpose | Example |
|---------|---------|---------|
| `typeof` | Returns the type of a value | `typeof "hello" // "string"` |
| `instanceof` | Checks if object is instance of a class | `car instanceof Car // true` |
| `delete` | Deletes a property from an object | `delete obj.name;` |
| `void` | Evaluates expression and returns `undefined` | `<a href="javascript:void(0)">` |
| `in` | Checks if property exists in object | `"name" in obj // true` |

### 9. Module System

| Keyword | Purpose | Example |
|---------|---------|---------|
| `import` | Imports from a module | `import fs from "fs";` |
| `export` | Exports from a module | `export function greet() { }` |
| `from` | Specifies module path in `import` | `import { x } from "./lib.js"` |
| `as` | Aliases imports/exports | `import { x as y } from "./lib"` |
| `default` | Default export | `export default class { }` |

### 10. Debugging

| Keyword | Purpose | Example |
|---------|---------|---------|
| `debugger` | Pauses execution (if dev tools open) | `debugger;` |

---

## Keywords You CANNOT Use as Variable Names

```javascript
// ❌ These will throw errors
let let = 5;        // Error
const if = true;    // Error
var return = 10;    // Error
```

```javascript
// ✅ These are valid
let a = 5;
const isReady = true;
var result = 10;
```

---

## Full List (ES2025+)

JavaScript currently has **~64 reserved keywords** (varies slightly by spec version). The major ones are covered above. A few additional ones:

- `await` (reserved in modules/async functions)
- `enum` (reserved for future use)
- `implements`, `interface`, `package`, `private`, `protected`, `public` (strict mode reserved)

---

## Key Takeaway

Keywords are the **building blocks of JavaScript syntax**. You can't use them as variable names because the language already uses them for a specific purpose. `let a = 10;` in your file uses the `let` keyword to declare a variable — that's why `let` is green/blue in your editor's syntax highlighting.
