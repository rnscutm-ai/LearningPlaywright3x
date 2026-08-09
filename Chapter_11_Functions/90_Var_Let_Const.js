//var - Function Scope - traitor
var a = 10;
console.log(a); // 10

// Define
function printHello(){
    console.log("Hello TheTestingAcademy");
    var a = 20;
    console.log(a); // 20
    if(true){
        var a = 30;
        console.log(a); //30
    }
    console.log(a); //30  -because var is function scope ,ideally should be //20
}
printHello();

// let - blocked scope

let b = 20;//Global Scope
function printHello(){
    console.log("Hello TheTestingAcademy!");
    let b = 30; // Local Scope
    console.log(b); //30
    if(true){
        let b = 5;
        console.log(b); //5
    }
    console.log("let ->",b);  //30
}
// Calling of the Function
printHello();
console.log(b);

// Let doesnot allow to have a re-declaration
//let a = 10;
//let a = 10;

// Var allow to have re-declaration
var a = 11;
var a = 12;

var n = "Raj";
let n = "Ramesh"; // not allowed!

const pi = 3.14;
console.log(pi);
pi = 3.14159; // Assignment to constant variable 