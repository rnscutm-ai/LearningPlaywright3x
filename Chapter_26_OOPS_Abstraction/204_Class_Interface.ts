interface Executable {
   name: string;
   run(): void;
   getStatus(): string;
}
class Test implements Executable {
    name: string;
    private status: string;

    constructor(name: string) {
        this.name = name;
        this.status = "Not Started";
    }

    run(): void {
        this.status = "Running";
        console.log(`Test ${this.name} is running.`);
        this.status = "Completed";
    }

    getStatus(): string {
        return this.status;
    }
}