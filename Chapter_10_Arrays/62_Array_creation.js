// Array literal preferred

let browsers = ["chrome","firefox","safari"];

// Array constructor

let scores = new Array(3); //creates [empty x 3], if one arg it will take as length
let scores1 = new Array(1,2,3); //if multiple arg it will take as elememts

let numbers = new Array(100,200,300,400);

let num = new Array.of(10,20,30,40,50);
console.log(num.length);

// Array.from()
let chars = ("hello"); // it will separate characters ("h","e","l","l","o")


