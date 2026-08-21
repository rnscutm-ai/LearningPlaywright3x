// Remove Duplicate Values from an Array.

let value = "JavaScript Programming";

let unique = [];
for (let i = 0; i <= value.length; i++) {
    if (!unique.includes(value[i])) {
        unique.push(value[i]);
    }
}
console.log(unique.join(""));