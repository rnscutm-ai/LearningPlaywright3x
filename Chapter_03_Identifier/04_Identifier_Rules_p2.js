var name = "John Doe";

//Naming convention cases (camelCase) start with a lowercase letter and each subsequent word starts with an uppercase letter.
//1.camelCase is commonly used for variable names and function names in JavaScript.
var firstName = "John";
var lastName = "Doe";
var fullName = firstName + " " + lastName;
let totalAmount = 100.50;
let isAvailable = true;

//2.PascalCase is similar to camelCase, but the first letter of each word is capitalized. It is often used for class names in JavaScript.
//standard practice is to use PascalCase for constructor functions and classes.
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }}

    let person1 = new Person("John", "Doe");
    let ShoppingCart = "Shopping Cart";

    //3.snake_case uses underscores to separate words. It is less common in JavaScript but can be used for constants or configuration variables.
    
    
    let user_name = "John_Doe";
    let is_active = true;

    //4. Screming_Snake_Case is similar to snake_case but uses all uppercase letters. It is often used for constants in JavaScript.
    
    const API_KEY = "1234567890abcdef";
    const MAX_VALUE = 100;
    const MIN_VALUE = 0;
    const DATA_URL = "https://api.example.com/data";

    //5. Hungarian Notation is a naming convention where the name of a variable indicates its type or intended use. It is less common in modern JavaScript but can still be found in some codebases.
    
    let strName = "John Doe"; // str indicates a string type
    let numAge = 30; // num indicates a number type
    let boolIsActive = true; // bool indicates a boolean type
    let arrItems = ["item1", "item2", "item3"]; // arr indicates an array type
    let objPerson = { firstName: "John", lastName: "Doe" }; // obj indicates an object type

    
