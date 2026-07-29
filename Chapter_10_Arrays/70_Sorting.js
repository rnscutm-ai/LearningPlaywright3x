let fruits = ["apple","grapes","banana","mango","cherry"];
 fruits.sort();
 console.log(fruits); // alphabetical by default

 let score = [2,4,9,3];
 console.log(score.sort());

 let nums = [10,1,21,2];
 console.log(nums.sort()); //output [1,10,2,21] , Natural sorting / lexicographic /string sort
  
 //proper sorting- asc/des order
        nums.sort((a,b)=> a-b);
 console.log(nums); //output [1,2,10,21] , ascending
 
 nums.sort((a,b)=> b-a);
 console.log(nums); // output [21,10,2,1], descending
 nums.reverse();
 console.log(nums); //output [1,2,10,21]


