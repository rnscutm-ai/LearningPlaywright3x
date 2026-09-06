enum Browser{
    Chrome = "CHROME",
    Firefox = "FIREFOX",
    Safari = "SAFARI",
    Edge = "EDGE",
    Opera = "OPERA"
}
function launchBrowser(browser: Browser) :void {    
    switch(browser) {
        case Browser.Chrome:
            console.log("Launching Chromium (Chrome v120)");
            break;
        case Browser.Firefox:
            console.log("Launching Gecko(Firefox v115)");
            break;
        case Browser.Safari:
            console.log("Launching WebKit(Safari v15)");
            break;
        case Browser.Edge:
            console.log("Launching Chromium(Edge v120)");
            break;
        case Browser.Opera:
            console.log("Launching Opera browser...");
            break;
    }
}
launchBrowser(Browser.Chrome); // Output: "Launching Chromium (Chrome v120)"