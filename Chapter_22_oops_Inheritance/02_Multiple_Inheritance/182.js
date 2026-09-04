// Mixin concept can help you perform multiple inheritance

// Mixin 1: Adds logging ability

let loggerMixin = function (Base) {
    return class extends Base {
        log(msg) {
            console.log("[Log]" + msg);
        }
    }
}
let ScreenShotMixin = function (Base) {
    return class extends Base {
        takeScreenShot() {
            console.log("[SCREENSHOT] captured");
        }
    }
}

// Base Class
class TestCase {
    constructor(name) {
        this.name = name;
    } 
    run() {
        console.log("Running:" + this.name);
    }
}
// Apply both Mixins
class SmartTest extends ScreenShotMixin(loggerMixin(TestCase)){
constructor(name){
    super(name);
}
}
let t = new SmartTest("Login flow");
t.run();
t.log("Test started");
t.takeScreenShot();
 
// This concept never used in Automation testing
