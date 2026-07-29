let broswer = ["chrome","firefox","safari","opera","edge"];
console.log(broswer.length);

broswer.pop();
//console.log(broswer);  //edge removed from last

let removed = broswer.shift();
//console.log(broswer); // chrome removed
//console.log(removed); // chrome

for(let i = 0; i < broswer.length;i++){
    console.log(broswer[i]);
    if(broswer[i]==="opera"){
        console.log("Opera doesnot support Automation now!");
    }
}