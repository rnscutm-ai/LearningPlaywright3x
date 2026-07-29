// Checking arrays
//check if something is an array

let result = Array.isArray([1,2,3]);
let result1 = Array.isArray("a");
console.log(result);
console.log(result1);

//map, filter, reduce

//every, some
[80,90,85].every(s=> s>=70) // true
[80,60,85].every(s=> s>=70);//false

// some - atleast one must pass
[80,60,85].some(s=> s < 70); //true
[80,90,85].some(s=> s < 70); //false
