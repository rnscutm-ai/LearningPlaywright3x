let scores = [
    [85, 90, 78], // 253
    [60, 55, 70], // 185
    [95, 88, 72]  // 255
];
let rowSums = scores.map(row => row.reduce((a, b) => a + b));
console.log(rowSums);


//-----------------------------------

let suiteResult = [
    ["login-pass","register-pass","logout-pass"], // authentication suite
    ["search-pass","filter-pass","sort-pass"], // search suite
    ["checkout-fail","payment-fail","confirmation-pass"] // payment suite
];

for (let i = 0; i < suiteResult.length; i++) {
    for (let j = 0; j < suiteResult[i].length; j++) {
        if (suiteResult[i][j].includes("fail")) {
            console.log(`Test failed: ${suiteResult[i][j]}`);
        }
    }
}
