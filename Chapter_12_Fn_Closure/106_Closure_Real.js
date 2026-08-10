function maxRetryTracker(maxRetries) {
    let attempts = 0;
    function tryAgain(testName) {
        attempts++;
        if (attempts > maxRetries) {
            return `Max retries exceeded for ${testName}`;
        } 
        return `Attempt ${attempts}/ ${maxRetries} for ${testName}`;
    };
    return tryAgain;
}

let runTCRetry = maxRetryTracker(3);
console.log(runTCRetry("Test Case 1")); // Attempt 1/3 for Test Case 1
console.log(runTCRetry("Test Case 1")); // Attempt 2/3 for Test Case 1
console.log(runTCRetry("Test Case 1")); // Attempt 3/3 for Test Case 1
console.log(runTCRetry("Test Case 1")); // Max retries exceeded for Test Case 1