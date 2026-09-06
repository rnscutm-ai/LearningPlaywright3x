interface Calculator{
    add(a:number, b:number): number;
    subtract(a:number, b:number): number;
    multiply(a:number, b:number): number;
    divide(a:number, b:number): number;
}
const calc: Calculator ={
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
}
console.log(calc.add(5, 3)); // 8
console.log(calc.subtract(5, 3)); // 2
console.log(calc.multiply(5, 3)); // 15
console.log(calc.divide(6, 3)); // 2