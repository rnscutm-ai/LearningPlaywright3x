let a = "Raj";
if(true){
    console.log(a);
    let a = "temp"; // ReferenceError: Cannot access 'username' before initialization
}
//---------------------
var b = "Raj";
if(true){
    console.log(b);
    var b = "temp"; // Raj
}

// Temporal Dead Zone (TDZ)

// Global Scope
// a = "Raj";
//Enter Block, Block Scope
// a = TDZ (exists but not initialized)