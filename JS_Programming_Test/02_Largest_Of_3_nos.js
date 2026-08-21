// Find the Largest of 3 Numbers.

let numbers = [10, 3, 9];

let max = numbers.sort((a, b) => b - a);
const largestNum = max[0];
console.log(largestNum);
