function getStatus(code){
if(code >=200 && code < 300) return "Success";
if(code >=400 && code < 500) return "Client Error";
if(code >=200 && code < 300) return "Server Error";

}
getStatus(200);
getStatus(404);
getStatus(500);

// Returns nothing - undefined
function logTest(name){
    console.log(`Running : ${name}`);
    // no return statement
}
logTest("Hi this is a log");
