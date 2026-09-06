interface TestHook {
    (testName: string): void;
}
let beforeEachHook: TestHook = function(testName): void {
    console.log(`Running before setting up environment for test: ${testName}`);
};
let afterEachHook: TestHook = function(testName): void {
    console.log(`Running after cleaning up environment for test: ${testName}`);
};
beforeEachHook("Sample Test");
afterEachHook("Sample Test");