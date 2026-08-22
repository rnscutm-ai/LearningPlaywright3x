// async function sayHello() {
//     return "Hello, QA!";
// }
// sayHello().then(function (msg) {
//     console.log(msg);
// });

// //--------------with out .then()

// async function getStatus() {
//     let status = await Promise.resolve(200);
//     console.log("Status Code:", status);
// }
// getStatus();

//------------

// async function testFlow() {
//     let step1 = await Promise.resolve("Opened Browser");
//     console.log(step1);

//      let step2 = await Promise.resolve("Clicked Login");
//     console.log(step2);

//      let step3 = await Promise.resolve("Verified Dashboard");
//     console.log(step3);
// }
//  testFlow();

//----------------------

// async function riskyTest() {
//     try {
//         let data = await Promise.reject("Element not found");
//         console.log(data);
//     } catch (error) {
//         console.log("Test Failed:", error)
//     }
// }
// riskyTest();

//--------------

// async function apiTest() {
//     try {
//         let response = await Promise.resolve({ status: 201, body: "Created" });
//         console.log("Status:", response.status);
//         console.log("Body:", response.body);
//     } catch (error) {
//         console.log("Error:", error);
//     }
//     finally {
//         console.log("Test Complete");
//     }
// }

// apiTest();

//-----------------

console.log("A");
async function test() {
    console.log("B");
    //await Promise.resolve();
    Promise.resolve();
    console.log("C");
}
test();
console.log("D");
