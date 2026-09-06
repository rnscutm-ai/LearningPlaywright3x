// Abstraction can be achieved through interfaces in TypeScript
// 3 ways to achieve abstraction in TypeScript are:
// 1. Abstract Classes
// 2. Interfaces
// 3. Type Aliases
//Enums are not considered as a way to achieve abstraction in TypeScript
interface Animal {
    name: string;
    makeSound(): void;
}

class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log(`${this.name} barks: Woof!`);
    }
}

const dog = new Dog("Buddy");
dog.makeSound();

//---------------------------------------------
interface User {
    name: string;
    age: number;
    email: string;
}
const user1: User = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
};  
const user2: User = {
    name: "Jane Smith",
    age: 25,
    email: "jane.smith@example.com"
};
const user3: User = {
    name: "Alice Johnson",
    age: 28,
    email: "alice.johnson@example.com"
};
