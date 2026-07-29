let scores = [40,80,93,62,74];

let grades = scores.map(s=> s>70 ? "pass" : "fail");
console.log(grades);

// map function we geerally use when ever we want to 
// transform array into a new array of same size

// Filter

let passing = scores.filter(s=> s>=70);
console.log(passing);

