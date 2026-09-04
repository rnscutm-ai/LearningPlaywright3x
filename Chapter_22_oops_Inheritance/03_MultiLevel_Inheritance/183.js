// Grand Father => Father => Son
// BasePage => AuthPage => AdminPage
class BasePage{
    constructor(name){
this.name = name;
    }
    open(){
        console.log("[OPEN]" + this.name);
    }
}
class AuthPage extends BasePage{
    login(user){
        console.log("LOGIN" + user);
    }
}
class AdminPage extends AuthPage{
    constructor(){
        super("Admin Panel");
    }
    manageUser(){
        console.log("[ADMIN] Managing User");
    }
}
let admin = new AdminPage();
admin.open();
admin.login("super Admin");
admin.manageUser();

