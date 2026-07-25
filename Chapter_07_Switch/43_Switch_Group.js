let browser = "Chrome";

switch(browser){
    case "Chrome" :
    case "Opera" :
    case "Brave" :
    case "Edge" :
        console.log("Chromium Project!");
        break;
    case "Firefox" :
        console.log("Mozilla Project!");
        break;
    case "Safari" :
        console.log("Apple browser use JS engine");
        break;
    default:
        console.log("Unknown Browser");                  
}