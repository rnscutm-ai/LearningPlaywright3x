// String conversion in JavaScript refers to the process of converting other data types into strings. This can be done using the String() function or by using the toString() method available on many objects.

// Using the String() function
let numberValue = 42;
let stringValueFromNumber = String(numberValue);    

console.log(stringValueFromNumber); // Outputs: "42"

let booleanValue = true;
let stringValueFromBoolean = String(booleanValue);
console.log(stringValueFromBoolean); // Outputs: "true"

// Using the toString() method
let arrayValue = [1, 2, 3];
let stringValueFromArray = arrayValue.toString();
console.log(stringValueFromArray); // Outputs: "1,2,3"

