interface BasePage{
    url: string;
    title: string;
}
interface LoginPage extends BasePage{
    usernameSelector: string;
    passwordSelector: string; 
    loginButtonSelector: string;
}  
interface freeTrialPage extends BasePage{
    freeTrialFormSelector: string;
    submitButtonSelector: string;
}
let loginPage: LoginPage = {
    url: "https://example.com/login",
    title: "Login Page",
    usernameSelector: "#username",
    passwordSelector: "#password",
    loginButtonSelector: "#loginButton"
};
let freeTrialPage: freeTrialPage = {
    url: "https://example.com/free-trial",
    title: "Free Trial Page",
    freeTrialFormSelector: "#freeTrialForm",
    submitButtonSelector: "#submitButton"
};
console.log("Login Page URL:", loginPage.url);
console.log("Login Page Title:", loginPage.title);
console.log("Username Selector:", loginPage.usernameSelector);
console.log("Password Selector:", loginPage.passwordSelector);
console.log("Login Button Selector:", loginPage.loginButtonSelector);
console.log("Free Trial Page URL:", freeTrialPage.url);
console.log("Free Trial Page Title:", freeTrialPage.title);
console.log("Free Trial Form Selector:", freeTrialPage.freeTrialFormSelector);
console.log("Submit Button Selector:", freeTrialPage.submitButtonSelector);