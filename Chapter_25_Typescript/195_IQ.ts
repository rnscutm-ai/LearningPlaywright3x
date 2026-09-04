function buildEndpointUrl(baseUrl: string, path: string): string {
    return baseUrl + path;
}

function isSucessCode(statusCode: number): boolean {
    return statusCode >= 200 && statusCode < 300;
}

function logTestStep(step : string): void {
    console.log("Test Step:", step);
}

console.log("Endpoint URL:", buildEndpointUrl("https://api.example.com", "/users"));
console.log("Is 200 a success code?", isSucessCode(200));
console.log("Is 404 a success code?", isSucessCode(404));
logTestStep("Starting the test execution.");