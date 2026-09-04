class BaseTest {
    setup() {
        console.log("Base: Open browser");
    }

}
class APITesting extends BaseTest {
    setup() {
        console.log("APITest: Open browser");
    }
}
let bTest = new BaseTest();
let test = new APITesting();
test.setup();
bTest.setup();
