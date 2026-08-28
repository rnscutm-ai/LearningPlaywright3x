// Private Fields - (#) - Hidden data
// Public Fields

class Credentials{
    #apiKey; // instance / class variable
    user;
    constructor(user, key){
        this.user = user;
        this.#apiKey = key;
    }
    // custom made function
    rabiGetAuthHeader(){
        return "bearer " + this.#apiKey;
    }
}
let cred = new Credentials("admin", "secret_key_1234");
// console.log(cred.apiKey);
// console.log(cred.#apiKey);
console.log(cred.user);