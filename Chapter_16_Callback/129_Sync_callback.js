let testResults = ["pass","fail","pass","skip"];
testResults.forEach(function(result, index){
    console.log("Test" + index + "->" + result);
});
// "All done" prints last because forEach is synchronous - It finishes all four iterations first, then moves on.