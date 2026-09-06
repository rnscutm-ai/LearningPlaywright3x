interface TestConfig {
    browser: string;
    headless: boolean;
    baseUrl: string;
    timeout?: number;
    retries?: number;

}
let localConfig: TestConfig = {
    browser: "chromium",
    headless: true,
    baseUrl: "http://localhost:3000",
};
let cicdConfig: TestConfig = {
    browser: "chromium",
    headless: true,
    baseUrl: "http://ci-server:3000",
    timeout: 10000,
    retries: 3,
};
console.log("Local Config:", localConfig);
console.log("CI/CD Config:", cicdConfig);