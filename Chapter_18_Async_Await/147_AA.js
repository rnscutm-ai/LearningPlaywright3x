// Async and Await
// Async Fn -> It is a function which have multiple Promises
// Await -> It is something we wait for the function to call it

async function getTestResults() {
    return "Pass";
}
getTestResults.then(function(results){
    console.log(results);
});
async function runTest() {

    let result = await Promise.resolve("Login test passed");
    console.log(result);

    let result2 = await Promise.resolve("Dashboard test passed");
    console.log(result2);
}