// Topic null vs undefined in JavaScript

/*simple definition of null vs undefined in JavaScript:
undefined: A variable exists, but has not been assigned a value. It is the default value of uninitialized variables.
null: It is an assignment value that represents the intentional absence of any object value. It is explicitly set by the programmer to indicate that a variable should have no value.
*/

var x;
console.log(x); // Output: undefined (x is declared but not assigned a value)

var y = null;
console.log(y); // Output: null (y is explicitly assigned the value null)   

//1. undefined

let userName;
console.log(userName); // Output: undefined (userName is declared but not assigned a value)

//2. null

let userAge = null;
console.log(userAge); // Output: null (userAge is explicitly assigned the value null)

// key differences between null and undefined in JavaScript (Summary Table):
// | Property          | undefined                     | null                         |
// |-------------------|--------------------------------|------------------------------|
// | Declaration       | Automatically assigned       | Explicitly assigned         |
// | Type              | undefined                      | object                       |
// | Use Case          | Uninitialized variables        | Intentional absence of value |
// | Comparison         | x === undefined               | x === null                   |
// | Default Value      | Yes (for uninitialized vars)  | No (must be explicitly set)  |
// | Memory Usage       | Less memory used              | More memory used             |
// |Comparision with other types | x == undefined (true)        | x == null (true)             |


