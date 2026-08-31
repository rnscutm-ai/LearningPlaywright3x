class BaseTest {
    constructor() {
        console.log("parent!");
    }
    setup() {
        console.log("Base: Open Browser");
    }
    tearDown() {
        console.log("Base: Close Browser");
    }
}
class UITest extends BaseTest {
    constructor() {
        super();
    }
    setup() {
        super.setup();
        console.log("UI: Maximize window");
    }
    tearDown(){
        console.log("UI: take screenshot");
        super.tearDown();
    }
}
let test = new UITest();
test.setup();