let nums = [10,20,30,45];
let results = nums.find(X => X > 20); // find - returns the value of the 1st elent in the array where predicate is true, otherwise undefined.
console.log(results);

//find index
 let index = nums.findIndex(n => n > 20);
 console.log(index);

 nums.findLast(n=> n > 20); // 45
 nums.findLastIndex(n=> n > 20); // 3