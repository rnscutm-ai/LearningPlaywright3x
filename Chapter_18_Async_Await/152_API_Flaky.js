// Flaky test - 100 TC, 97passed, 3failed
// Re-run 3 failed TC - it some times pass, fail..
// After re-run 2passed, 1failed
// Flaky test - 2 (some times fail, some times pass)

// Retry pattern with Async/Await - Real QA

let attempt = 0;

function flakyAPI() {
    attempt++;
    if (attempt <= 3) {
        return Promise.resolve("Attempt" + attempt + ": Success!");
    }
    return Promise.reject("Attempt" + attempt + ": Failed");

}

async function retryTesting(maxRetries) {
    for (let i = 1; i <= maxRetries; i++) {
        try {
            let result = await flakyAPI();
            console.log('Pass Promise!', result);
        }
        catch (error) {
            console.log('Failed Promise!', error);
        }
    }
}
retryTesting(5);