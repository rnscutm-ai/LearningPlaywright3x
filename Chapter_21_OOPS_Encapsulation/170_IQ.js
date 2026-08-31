class TestCase {
    #status = "not run";
    static #count = 0;

    constructor(name) {
        this.name = name;
        TestCase.#count++;
    }
    run(pass) {
        this.#status = pass ? "PASSED" : "FAILED";
    }
    getStatus() {
        return this.#status;
    }
    
    static getCount() {
        return TestCase.#count;
    }
}
let TC = new TestCase("Login");
TC.run(true);
console.log(TC.getStatus());
console.log(TestCase.getCount());
