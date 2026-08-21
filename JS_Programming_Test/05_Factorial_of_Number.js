// Find the Factorial of a Number.


let n = 7; // 7x6x5x4x3x2x1 = 5040
let fact = 1;

for(let i = 1; i <= n; i++){
    fact = fact * i;
}
console.log(fact);