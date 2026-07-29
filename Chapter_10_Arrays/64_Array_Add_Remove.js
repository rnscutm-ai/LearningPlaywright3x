let arr = [1,2,3];
console.log(arr);

// Add to End
arr.push(4);
console.log(arr);

arr.push(5,6); //we can add multiple elememts also
console.log(arr);

// Remove from End
arr.pop();
console.log(arr);

// Add to the Beginning
arr.unshift(0);
console.log(arr);

// Remove from Beginning
arr.shift();
console.log(arr);

// Add or remove form any index

arr.splice(2,1);
console.log(arr); //[1,2,4,5], removed 3 which was on index [2]

arr.splice(2,0,15); // from index[2] remove 0 element and add 15
console.log(arr); //[1,2,15,4,5], added 15 in place of 4 on index [2]

arr.splice(1,2,10,20); //from index[1] remove two elemnts and add 10,20
console.log(arr); // from index[1] removed 2 values i.e 2,15 and added 10,20 in index [1] followed by [2]



