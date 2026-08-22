// Print the Fibonacci Series up to N terms.

let n = 9;
let a = 0;
let b = 1;

let result = [];

for(let i = 1; i <= n; i++){
result.push(a);

let next = a + b;
a = b;
b = next;
}
console.log(result.join(" "));

//------------------------------------------------------------

// for (let i = 1; i <= n; i++) {
//     process.stdout.write(a + " ");

//     let next = a + b;
//     a = b;
//     b = next;
// }
