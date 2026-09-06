class APIClient{
    public baseURL: string;
    private apiKey: string;
    protected timeout: number;

    constructor(baseURL: string, apiKey: string, timeout: number) {
        this.baseURL = baseURL;
        this.apiKey = apiKey;
        this.timeout = timeout;
    }
    private getAuthHeaders(): string {
        return "Authorization: Bearer " + this.apiKey;
}
public sendRequest(endpoint: string): void {
    console.log("GET:" + this.baseURL + endpoint);
    console.log("Auth:" + this.getAuthHeaders());
    console.log("Timeout:" + this.timeout + "ms");
}
}
class userAPIClient extends APIClient {
    getUsers(): void {
        console.log("Fetching users from " + this.baseURL + "/users");
        console.log("URL:" + this.baseURL + "/users"); // 'baseURL' is private and only accessible within class 'APIClient'.
    }
    // constructor(baseURL: string, apiKey: string, timeout: number) {
    //     super(baseURL, apiKey, timeout);
    // }
}
let client = new APIClient("https://api.example.com", "my-api-key", 5000);
console.log("Base URL:", client.baseURL); // Accessible
client.sendRequest("/health"); // Accessible