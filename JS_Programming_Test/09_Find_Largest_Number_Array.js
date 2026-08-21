// Find the Largest Number in an Array.

let arr = [10,30,70,25,2];

let largest = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }   
}
console.log("Largest number of array is:",largest);        