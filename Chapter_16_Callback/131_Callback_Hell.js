// Real QA scenario: E2E login flow app.vwo.com

function openBrowser(callback){
console.log("Opening the browser!");
setTimeout(function(){
    console.log("Step-1: Browser starting...");
    callback();
}, 500);
}

function goToLoginPage(callback){
   setTimeout(function(){
    console.log("Step-2: Login page loaded");
    callback();
}, 500); 
}

function enterCredential(callback){
 setTimeout(function(){
    console.log("Step-3: Credentials entered");
    callback();
}, 500);    
}

function clickLogin(callback){
   setTimeout(function(){
    console.log("Step-4: Login button clicked");
}, 500);  
}

// This is callback HELL
openBrowser(function(){
    goToLoginPage(function(){
        enterCredential(function(){
            clickLogin(function(){
                console.log("Test is Complete!");
            })
        })
    })
})
