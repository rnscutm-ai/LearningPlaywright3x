# JavaScript Arrays

## What is an Array?

An **array** is an ordered, zero-indexed collection of values. In JavaScript, arrays can hold **any mix of types** (numbers, strings, booleans, objects, even other arrays).

```javascript
let browsers = ["chrome", "firefox", "webkit"];
console.log(browsers[0]);      // chrome
console.log(browsers.length);  // 3
```

> Reference files: `Chapter_10_Arrays/60_Arrays.js` to `75_Destructuring.js`

---

## 1. Creating Arrays

### Array Literal (Preferred)

```javascript
let browsers = ["chrome", "firefox", "safari"];
let empty = [];
let mixed = [1, "two", true, null, { name: "John" }];
```

### `new Array()` Constructor — Beware the One-Argument Trap

```javascript
let scores = new Array(3);        // ⚠️ creates [empty x 3]  → length 3, NO elements
let scores1 = new Array(1, 2, 3); // ✅ multiple args → [1, 2, 3]
let numbers = new Array(100, 200, 300, 400); // [100, 200, 300, 400]
```

**Key rule:** one numeric argument = **length**; multiple arguments = **elements**.

### `Array.of()` — Always Creates Elements

```javascript
let num = Array.of(10, 20, 30, 40, 50); // [10, 20, 30, 40, 50]
let one = Array.of(3);                  // [3]  ← NOT a length-3 array
```

### `Array.from()` — Convert Array-Like / Iterables

```javascript
let chars = Array.from("hello");  // ["h", "e", "l", "l", "o"]
let fromSet = Array.from(new Set([1, 2, 2, 3])); // [1, 2, 3]
let fromNodelist = Array.from(document.querySelectorAll("div"));
```

---

## 2. Accessing & Modifying Elements

```javascript
let status = ["pass", "fail", "skip"];

status[1];          // "fail"    (bracket index)
status.at(-1);      // "skip"    (negative index from the end)
status.at(-2);      // "fail"
status[-1];         // undefined ← bracket notation does NOT support negatives
status.at(-4);      // undefined (out of range)

// Modify
status[1] = "blocked";
console.log(status); // ["pass", "blocked", "skip"]
```

> **Negative indexes:** use `.at(-n)` — bracket `[-1]` returns `undefined`, it is not a valid property key lookup for negative values.

---

## 3. Adding & Removing Elements

| Method | Action | Returns |
|--------|--------|---------|
| `push(v)` | Add to **end** | new length |
| `pop()` | Remove from **end** | removed value |
| `unshift(v)` | Add to **beginning** | new length |
| `shift()` | Remove from **beginning** | removed value |
| `splice(start, deleteCount, ...items)` | Add/remove at **any index** | removed values |

```javascript
let arr = [1, 2, 3];

arr.push(4);       // [1, 2, 3, 4]
arr.push(5, 6);    // [1, 2, 3, 4, 5, 6]  ← multiple values allowed
arr.pop();         // [1, 2, 3, 4, 5]
arr.unshift(0);    // [0, 1, 2, 3, 4, 5]
arr.shift();       // [1, 2, 3, 4, 5]

// splice(start, deleteCount, ...items)
arr.splice(2, 1);      // remove 1 element at index 2
arr.splice(2, 0, 15);  // remove 0, insert 15 at index 2
arr.splice(1, 2, 10, 20); // remove 2 starting at index 1, insert 10, 20
```

---

## 4. Searching

| Method | Returns |
|--------|---------|
| `indexOf(v)` | first index or `-1` |
| `lastIndexOf(v)` | last index or `-1` |
| `includes(v)` | `true` / `false` |
| `find(fn)` | first **value** where fn is true, else `undefined` |
| `findIndex(fn)` | first **index** where fn is true, else `-1` |
| `findLast(fn)` | last value where fn is true |
| `findLastIndex(fn)` | last index where fn is true |

```javascript
let results = ["pass", "fail", "pass", "error", "fail"];

results.indexOf("fail");     // 1
results.indexOf("skip");     // -1
results.lastIndexOf("fail"); // 4
results.includes("error");   // true

let nums = [10, 20, 30, 45];
nums.find(x => x > 20);        // 30   (first value > 20)
nums.findIndex(n => n > 20);   // 2
nums.findLast(n => n > 20);    // 45
nums.findLastIndex(n => n > 20); // 3
```

---

## 5. Iterating

```javascript
let tests = ["login", "checkout", "search"];

// classic for loop
for (let i = 0; i < tests.length; i++) {
  console.log(tests[i]);
}

// for...of → cleanest for values
for (let test of tests) {
  console.log(test);
}

// forEach → no return value, gives (value, index)
tests.forEach((test, index) => {
  console.log(`${index}: ${test}`);
});

// entries() → index + value pairs
for (let [i, test] of tests.entries()) {
  console.log(i, test);
}

// for...in → gives INDEXES (use for objects, not arrays)
let students = ["john", "kavin", "marco", "veer"];
for (let student in students) {
  console.log(student, "=>", students[student]); // 0 => john ...
}
```

---

## 6. Transforming (Map / Filter / Reduce)

### `map()` — Same size, new values

```javascript
let scores = [40, 80, 93, 62, 74];
let grades = scores.map(s => s > 70 ? "pass" : "fail");
console.log(grades); // ["fail", "pass", "pass", "fail", "pass"]
```

### `filter()` — Smaller or equal size, keeps matches

```javascript
let passing = scores.filter(s => s >= 70);
console.log(passing); // [80, 93, 74]
```

### `reduce()` — Collapse to a single value

```javascript
let total = [10, 20, 30].reduce((sum, n) => sum + n, 0);
console.log(total); // 60
```

### `flat()` / `flatMap()` — Flatten nested arrays

```javascript
[[1, 2], [3, 4]].flat();            // [1, 2, 3, 4]
[[1], [[2], [3]]].flat(2);          // [1, 2, 3]
["a b", "c"].flatMap(s => s.split(" ")); // ["a", "b", "c"]
```

---

## 7. Sorting & Reversing

```javascript
let fruits = ["apple", "grapes", "banana", "mango", "cherry"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "cherry", "grapes", "mango"]
```

### ⚠️ Default `sort()` sorts as **strings** (lexicographic)

```javascript
let nums = [10, 1, 21, 2];
console.log(nums.sort()); // [1, 10, 2, 21] ← NOT numeric!
```

### Numeric sort with a comparator

```javascript
nums.sort((a, b) => a - b); // ascending  → [1, 2, 10, 21]
nums.sort((a, b) => b - a); // descending → [21, 10, 2, 1]
nums.reverse();             // reverses order → [1, 2, 10, 21]
```

---

## 8. Slicing & Concatenating

### `slice(start, end)` — Returns a **NEW array**

- Does NOT mutate the original
- `start` inclusive, `end` **exclusive**
- Negative indexes count from the end
- Omitting `end` goes to the end

```javascript
let arr = [1, 2, 3, 4, 5];

arr.slice(1, 3);  // [2, 3]   ← index 3 excluded
arr.slice(2);     // [3, 4, 5]
arr.slice(-2);    // [4, 5]
arr.slice(-1);    // [5]
arr.slice(-3);    // [3, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5] ← unchanged
```

### `concat()` and spread `...`

```javascript
let a = [1, 2, 3];
let b = [4, 5, 6];

let c = a.concat(b); // [1, 2, 3, 4, 5, 6]
let d = [...a, ...b]; // [1, 2, 3, 4, 5, 6]  ← modern way

// join — array into a string
let s = ["pass", "fail", "skip"].join("|");
console.log(s); // "pass|fail|skip"
```

---

## 9. Checking Arrays & Predicates

```javascript
Array.isArray([1, 2, 3]); // true
Array.isArray("a");       // false
```

### `every()` — ALL must pass

```javascript
[80, 90, 85].every(s => s >= 70); // true
[80, 60, 85].every(s => s >= 70); // false
```

### `some()` — AT LEAST ONE must pass

```javascript
[80, 60, 85].some(s => s < 70); // true
[80, 90, 85].some(s => s < 70); // false
```

---

## 10. Copying Arrays

### Shallow Copy (new array, original untouched)

```javascript
let original = [1, 2, 3];

let copy1 = [...original];     // spread
let copy2 = original.slice();  // slice
let copy3 = Array.from(original); // from
let copy4 = original.concat(); // concat

copy1.push(99);
console.log(original); // [1, 2, 3] ← safe
console.log(copy1);    // [1, 2, 3, 99]
```

### ⚠️ "Deep Copy" by direct assignment is NOT a copy

```javascript
let deep_copy_array = original;  // same reference!
original.push(91);
console.log(original);        // [1, 2, 3, 91]
console.log(deep_copy_array); // [1, 2, 3, 91] ← BOTH changed
```

> Shallow copy is fine for primitives. For nested objects, use `structuredClone()` or `JSON.parse(JSON.stringify(arr))`.

---

## 11. Destructuring

### Basic

```javascript
let [first, second, third] = [10, 20, 30];
console.log(first);  // 10
console.log(second); // 20
console.log(third);  // 30
```

### Rest `...` gathers the remainder

```javascript
let [first, second, ...third] = [10, 20, 30, 40, 50];
console.log(first);  // 10
console.log(second); // 20
console.log(third);  // [30, 40, 50]
```

### Skipping items & defaults

```javascript
let [, , third] = [1, 2, 3];    // third = 3 (skip first two)
let [a = 99] = [];              // a = 99 (default)
```

### Swapping without a temp variable

```javascript
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y); // 2 1
```

---

## Quick Reference

```
┌────────────────────────────────────────────────────┐
│              ARRAY CHEATSHEET                      │
├────────────────────────────────────────────────────┤
│ Add:        push(end)  unshift(start)  splice(i,0,v)│
│ Remove:     pop(end)   shift(start)    splice(i,n) │
│ Search:     indexOf  lastIndexOf  includes  find    │
│             findIndex  findLast  findLastIndex     │
│ Iterate:    for  for...of  forEach  entries()      │
│ Transform:  map  filter  reduce  flat  flatMap     │
│ Sort:       sort()  sort((a,b)=>a-b)  reverse()    │
│ Slice/Copy: slice  concat  [...arr]  Array.from    │
│ Check:      Array.isArray  every  some             │
│ Destructure:[a, b, ...rest] = arr                  │
└────────────────────────────────────────────────────┘
```
