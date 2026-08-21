// Check whether a number is Prime or Not.

let num = 2;

let prime = true;
if(num <= 1){
    prime = false;
}
else{
    for(let i = 2; i< num; i++){
        if(num%1 === 0){
            prime = false;
        }
    }
}
if(prime === true){
    console.log(num, "is a prime number.");
}
else{
console.log(num, "is not a prime number.");
}