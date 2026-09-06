class BasePage{
    protected baseURL: string;

    constructor(URL: string) {
        this.baseURL = URL;
    }
    protected navigateTo(path: string): void {
        console.log(`Navigating to: ${this.baseURL}${path}`);
    }
}
class LoginPage extends BasePage {
    constructor() {
        super("https://example.com/login");
    }
    login(user: string): void {
        this.navigateTo("/login");
        console.log(`Logging in as: ${user}`);
        console.log(`Login successful for user: ${user}`);
    }
}
let page = new LoginPage();
page.login("testUser");