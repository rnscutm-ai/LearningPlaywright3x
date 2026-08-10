// Closure is a function that has access to its own scope,
//  the outer function's scope, and the global scope. 
// It allows a function to remember and access variables 
// from its outer scope even after the outer function has finished executing.

function outer() {
    let outerVariable = 'I am from the outer function';

    function inner() {
        console.log(outerVariable); // Accessing the outer function's variable
    }
}

//----

function startBrowser() {
    let Name = 'Chrome';

    function installBrowser() {
        console.log(Name); // Accessing the outer function's variable
    }
    return installBrowser;
}

const runTest = startBrowser();
runTest(); // Output: Chrome