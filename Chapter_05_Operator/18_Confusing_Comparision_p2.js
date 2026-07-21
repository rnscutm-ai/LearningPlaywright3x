
// null and undefined...

console.log(null == undefined); // Output: true (loose equality, type coercion)
console.log(null === undefined); // Output: false (strict equality, value and datatype comparison)

console.log(null == null); // Output: true (loose equality, both are null)
console.log(undefined == undefined); // Output: true (loose equality, both are undefined)

console.log(null === 0); // Output: false (strict equality, value and datatype comparison)
console.log(undefined === 0); // Output: false (strict equality, value and datatype comparison)
console.log(null == 0); // Output: false (loose equality, null is not equal to 0)
console.log(undefined == 0); // Output: false (loose equality, undefined is not equal to 0)
console.log(null == 0 || null > 0); // Output: false (loose equality, null is not equal to 0 and null is not greater than 0)
console.log(null > 0); // Output: false (loose equality, null is not greater than 0)   
console.log(null >= 0); // Output: true (loose equality, null is considered as 0 in this comparison)