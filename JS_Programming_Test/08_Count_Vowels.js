// Count the Vowels in a given string.

let str = "I am learning JavaScript";

let vowels = 0;

for (ch of str) {
    if (ch >= 'a' && ch <= 'z') {
        if ("aeiou".includes(ch)) {
            vowels++;
        }
        }
    }
console.log("Vowels:",vowels);