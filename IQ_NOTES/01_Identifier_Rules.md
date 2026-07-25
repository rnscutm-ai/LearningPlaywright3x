# JavaScript Identifier Rules

## What is an Identifier?

An **identifier** is a name you give to variables, functions, classes, parameters, or object properties. It's how you refer to things in your code.

```javascript
let userName = "Alice";     // userName is an identifier
function greet() {}         // greet is an identifier
class UserAccount {}        // UserAccount is an identifier
```

---

## The Rules (Strict)

### 1. Allowed Characters

Only these characters are allowed in an identifier:

| Category | Characters |
|----------|-----------|
| Letters | `a–z`, `A–Z` (and Unicode letters like `é`, `ñ`, `ü`, `π`) |
| Digits | `0–9` (**but not as the first character**) |
| Underscore | `_` |
| Dollar Sign | `$` |

```javascript
// ✅ Valid
let name;
let user_name;
let $price;
let _private;
let firstName;
let π = 3.14;
let ñoño = "cute";

// ❌ Invalid
let 1name;       // starts with a digit
let my-name;     // hyphen is not allowed
let first name;  // space is not allowed
let @data;       // @ is not allowed
```

### 2. Cannot Start with a Digit

```
✅ let a1 = 5;
✅ let name2 = "John";
❌ let 1name = "John";
❌ let 2ndPlace = "silver";
```

### 3. Cannot Be a Reserved Keyword

You cannot use JavaScript keywords as identifiers.

```javascript
// ❌ These throw SyntaxError
let let = 5;
const if = true;
var return = 10;
function class() {}
```

> See [02_keyword.md](./02_keyword.md) for the full list of reserved keywords.

---

## Common Conventions (Not Rules, But Follow Them)

| Convention | Example | When to Use |
|------------|---------|-------------|
| **camelCase** | `firstName`, `getUserData` | Variables, functions, parameters |
| **PascalCase** | `UserAccount`, `HttpClient` | Classes, constructors, React components |
| **UPPER_SNAKE_CASE** | `MAX_SIZE`, `API_KEY` | Constants (values that never change) |
| **\_prefix** | `_privateVar`, `_internalFn` | "Private" members (convention only) |
| **$prefix** | `$element`, `$scope` | DOM elements (jQuery convention) |

```javascript
// camelCase — variables & functions
let firstName = "Alice";
function getUserById(id) { }

// PascalCase — classes
class UserProfile { }

// UPPER_SNAKE_CASE — true constants
const MAX_RETRY_COUNT = 3;
const API_BASE_URL = "https://api.example.com";
```

---

## Case Sensitivity

Identifiers are **case-sensitive**. These are all different:

```javascript
let name = "Alice";
let Name = "Bob";
let NAME = "Charlie";

console.log(name);  // Alice
console.log(Name);  // Bob
console.log(NAME);  // Charlie
```

---

## Unicode Support

JavaScript allows Unicode letters in identifiers, so you can use non-English characters:

```javascript
let 名前 = "Taro";      // Japanese
let привет = "hello";   // Russian
let nombre = "Juan";     // Spanish
let 年龄 = 25;           // Chinese
let π = 3.14159;         // Greek — common in math code
let ε = 0.001;
```

Useful for mathematical/scientific code, but in team projects, stick to English for readability.

---

## Valid vs Invalid Examples

```javascript
// ✅ VALID identifiers
let a;
let _;
let $;
let _temp;
let $value;
let camelCase;
let PascalCase;
let UPPER_SNAKE;
let a1b2c3;
let _123;
let $_____;
let unicodeÑoño;

// ❌ INVALID identifiers
// let 1st;          // starts with digit
// let my-var;       // hyphen
// let let;          // reserved keyword
// let class;        // reserved keyword
// let return;       // reserved keyword
// let function;     // reserved keyword
// let const;        // reserved keyword
// let true;         // reserved keyword (literal)
// let false;        // reserved keyword (literal)
// let null;         // reserved keyword (literal)
// let first name;   // space
// let @thing;       // special character
// let #id;          // special character (unless private class field)
```

---

## Quick Reference

```
┌───────────────────────────────────────────────┐
│           IDENTIFIER CHECKLIST                │
├───────────────────────────────────────────────┤
│ ✅ Starts with: letter, _ , or $              │
│ ✅ Followed by: letters, digits, _, or $      │
│ ✅ Not a reserved keyword                     │
│ ✅ Case-sensitive                             │
│ ❌ No spaces, hyphens, or special chars       │
└───────────────────────────────────────────────┘
```
