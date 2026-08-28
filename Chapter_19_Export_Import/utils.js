export let Base_url = "https://api.staging.com";

export function formatTestName(name){
    return "TC_" +name.toUpperCase();
}

// export class LoginPage{
//     constructor(page) {this.page = page;}
//     async login(u, p){}
//     async openBrowser(u, p){}
//     async closeBrowser(u, p){}
//     async clickElement(u, p){}
// }