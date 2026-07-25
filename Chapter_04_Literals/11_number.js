// topic: All number types in JavaScript are represented by the Number type. The Number type is a double-precision 64-bit binary format IEEE 754 value. It can represent both integer and floating-point numbers.

//1. Integer Numbers

// Decimal(base 10)
let decimal = 42;
console.log(decimal); // Output: 42

// Binary(base 2)
let binary = 0b101010;
console.log(binary); // Output: 42

// Octal(base 8)
let octal = 0o52;
console.log(octal); // Output: 42

// Hexadecimal(base 16)
let hexadecimal = 0x2A;
console.log(hexadecimal); // Output: 42

//2. Floating-Point Numbers
let floatNum = 3.14;
console.log(floatNum); // Output: 3.14

let float2 = -0.5;
let float3 = .5;
let float4 = 5.0;

console.log(float2); // Output: -0.5
console.log(float3); // Output: 0.5
console.log(float4); // Output: 5       

//3. exponential Notation
let expNum = 1.23e5; // 1.23 * 10^5
console.log(expNum); // Output: 123000

let expNum2 = 4.56e-3; // 4.56 * 10^-3
console.log(expNum2); // Output: 0.00456

let expNum3 = 7.89e2; // 7.89 * 10^2
console.log(expNum3); // Output: 789
