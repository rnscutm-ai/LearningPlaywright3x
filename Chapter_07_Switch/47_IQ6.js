let status = 0;
console.log(typeof status); // output is number
switch(status){
    case false:
        console.log("false matched");  
        break;
    case 0:
        console.log("0 matched");
        break;
    
}
// output is 0 matched