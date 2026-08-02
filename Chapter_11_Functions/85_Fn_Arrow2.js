
function doubleMe(a){
    return a+2;
}

const doubleA = (a) => a+2;
doubleA(10);

const getEnv = () => "staging";
console.log(getEnv());

// Multi line
const getResult = (score) =>
{
   if(score > 70) return "pass";
   else return "fail";
}
console.log(getResult(67));
