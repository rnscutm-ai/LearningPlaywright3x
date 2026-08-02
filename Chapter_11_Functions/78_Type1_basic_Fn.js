//Type-1 - no param , no return value, final return - undefined
function greet(){
    console.log("Hi");
}
greet(); // Hi
greet(); // Hi
 let output = greet();
 console.log(output); // undefined

 // diff bet console vs return
  // console.log - print to terminal 
  // return - send value back to caller

  function addLog(a, b){
    console.log(a+b); // prints, return nothing

  }

  function addReturn(a, b){
   return a+b; // gives value back

  }
  let x = addLog(2,3); // print somethong, x = undefined
  let y = addReturn(2,3); // prints nothing, y=5