// Check whether a string is a Palindrome.

let str = "Madam";
 let reverse = "";
 let actStr = str.toLowerCase();
for(let i = actStr.length-1; i >= 0; i--){
reverse += actStr[i];
}
if(reverse === actStr){
    console.log(actStr, "is Palindrome");
}else{
    console.log(actStr, "is not Palindrome");
}
