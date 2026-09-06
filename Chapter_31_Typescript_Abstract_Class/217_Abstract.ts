// Abstract class note: An abstract class is a class that cannot be instantiated on its own 
// and is meant to be subclassed. It can contain both abstract methods 
// (methods without implementation) and concrete methods (methods with implementation). 
// Subclasses of an abstract class must implement all abstract methods.

abstract class BaseTest {
    protected testName: string;
    constructor(testName: string) {
        this.testName = testName;
    }
    abstract setUp(): void; // Abstract method, must be implemented by subclasses
    abstract tearDown(): void; // Abstract method, must be implemented by subclasses
    abstract executeTest(): void; // Abstract method, must be implemented by subclasses

    // Concrete method with implementation, inherited as-is by subclasses
    getTestName(): string {
        return this.testName;
    }
}
class UITest extends BaseTest {
    constructor(testName: string) {
        super(testName); // Must call the abstract class constructor
    }
    setUp(): void {
        console.log("Setup: Launch browser");
    }
    tearDown(): void {
        console.log("Teardown: Close browser");
    }
    executeTest(): void {
        console.log("Execute: click button, fill forms");
    }
}
let uiTest = new UITest("Login Test");
uiTest.setUp();
uiTest.executeTest();
uiTest.tearDown();
console.log("Test Name:", uiTest.getTestName());
// let base = new BaseTest("X"); // Error: Cannot create an instance of an abstract class.
