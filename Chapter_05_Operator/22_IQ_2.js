
let environment = "staging";
let baseURL = environment === "prod"
? "https://api.example.com"
: "https://staging-api.example.com";
console.log(baseURL);
