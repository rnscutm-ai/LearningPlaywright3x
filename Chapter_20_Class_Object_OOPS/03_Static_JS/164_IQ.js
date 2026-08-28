class TestRunner{
    static totalTestCase = 0;
    static passCount = 0;
    constructor(name, passed){
        this.name = name;
        TestRunner.totalTestCase++;
        if(passed){
            TestRunner.passCount++;
        }
    }
    non_static_display(){
        return this.name;
    }
    static summary(){
        return TestRunner.passCount + "/" + TestRunner.totalTestCase + " passed";
    }
}
new TestRunner("Login", true);
new TestRunner("Signup", false);
new TestRunner("Cart", true);
new TestRunner("Checkout", true);
console.log(TestRunner.summary());
