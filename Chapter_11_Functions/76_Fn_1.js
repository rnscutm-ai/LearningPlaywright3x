// without function repeated logic

/*let score1 = 85;
let result1 = score1>=70? "pass" : "fail";
console.log(result1); // pass

let score2 = 45;
let result2 = score2>=70? "pass" : "fail";
console.log(result2); // fail
*/

// with function
// Define
function getResult(score){
return score >= 70? "pass" : "fail";
}
// calling
getResult(85); // pass
getResult(35); // fail
