const test = require("node:test");

let grid = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];
console.log(grid[0][0]); // 10
console.log(grid[1][1]); // 50
console.log(grid[2][2]); // 90

grid[0][0] = 100;
console.log(grid); // [[100, 20, 30], [40, 50, 60], [70, 80, 90]]   

console.log(grid.length); // 3
console.log(grid[grid.length - 1][grid[0].length - 1]); // 90
console.log(grid[2][2]); // 90

let testMatrix = [
    ["login", "pass", "200"],
    ["checkout", "fail", "404"],
    ["search", "pass", "180"]
];
for (let i = 0; i < testMatrix.length; i++) {
    for (let j = 0; j < testMatrix[i].length; j++) {
        process.stdout.write(testMatrix[i][j] + " ");
    }
    console.log(); // Move to the next line after each row  
}

console.log("--------");

for(let row of testMatrix) {
    for(let cell of row) {
        process.stdout.write(cell + " ");
    }
    console.log(); // Move to the next line after each row
}   

//foreach
console.log("--------");

testMatrix.forEach(row => {
    row.forEach(cell => {
        process.stdout.write(cell + " ");
    }); 
    console.log(); // Move to the next line after each row
});
       