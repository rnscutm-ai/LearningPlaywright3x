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
}


let t1 = new TestRunner("loginTest", true);
let t2 = new TestRunner("SignupTest", true);
let t3 = new TestRunner("dashboardTest", true);
let t4 = new TestRunner("supportTest", true);
// name - non static
// totalTestCases - static
console.log(TestRunner.totalTestCase);
console.log(t1.name);
console.log(t2.name);
console.log(t3.name);
console.log(t4.name);