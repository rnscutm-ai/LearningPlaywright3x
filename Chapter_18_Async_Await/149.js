// Error Handling - try/catch
// with Promises you use .catch().
// with async/await you use try/catch - exactly like regular javascript

async function testAPI() {
    try {
        let result = await Promise.reject("503 service unavailable");
        console.log('Result', result);
    } catch (error) {
        console.log('Error', error);
    } finally {
        console.log("Clean up!")
    }
}

testAPI();

//-----------------------------
// Normal fn

function step1(){
    console.log("1");
}
function step2(){
    console.log("2");
}

step1();
step2();