class Browser{
    constructor(name){
        this.name = name;
        this.isOpen = true;
        console.log(name + " Launched");
    }
    startBrowser(){
        console.log("Starting the Browser");
    }
    closeBrowser(){
        console.log("Closed Browser");
    }
}
let chrome = new Browser("Chrome");
let fireFox = new Browser("Firefox");
console.log(chrome.isOpen);
chrome.closeBrowser();
chrome.startBrowser();