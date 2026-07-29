let a = [1,2,3];
let b = [4,5,6];
let c = a.concat(b);
console.log(c);

// spread (modern way) - concatenation (...)
// ... all the elements

let d = [...a,...b];
console.log(d);

//join
//array into big string
let s = ["pass","fail","skip"].join("|"); // Rarely used
console.log(s);