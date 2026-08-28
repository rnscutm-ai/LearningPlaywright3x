// Constructor- **A special function that runs automatically, once, 
// at the moment an object is created with new keyword.**

class Car{
    // constructor(){
    //  // Default Constuctor
    // }

    // Paramaterized Constructor
    constructor(assigned_name){
        this.name = assigned_name;
    }
}

let hyndai_i10 = new Car("i10");
console.log(hyndai_i10.name);

let hyndai_creta = new Car("creta");
console.log(hyndai_creta.name);

// The constructor is a special method that `new` calls automatically 
// to initialise a new instance. It's where `this` gets its properties.
//  **One per class, runs once per object.**

