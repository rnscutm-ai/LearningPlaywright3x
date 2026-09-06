class PlaywrightConfig {
    private readonly baseUrl: string;
    private readonly timeout: number;
    private readonly retries: number;

    constructor(baseUrl: string, timeout: number, retries: number) {
        this.baseUrl = baseUrl;
        this.timeout = timeout;
        this.retries = retries;
    }
    showConfig(): void {
        console.log("Playwright Configuration:");
        console.log("Base URL:", this.baseUrl);
        console.log("Timeout:", this.timeout, "ms");
        console.log("Retries:", this.retries);
    }
}
let config = new PlaywrightConfig("https://example.com", 5000, 3);
config.showConfig();