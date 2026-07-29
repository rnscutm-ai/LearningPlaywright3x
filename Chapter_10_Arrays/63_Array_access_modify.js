// Accessing and Modifying

let status = ["pass","fail","skip"];
console.log(status[1]);  //fail

console.log(status.at(-1)); //skip
console.log(status.at(-2)); //fail

console.log(status.at(-4)); //undefined

//Modify
status[1] = "blocked";
console.log(status); // ["pass","blocked","skip"]

//length
console.log(status.length);
