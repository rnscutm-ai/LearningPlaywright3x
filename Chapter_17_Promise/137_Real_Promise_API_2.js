let apiCall = new Promise(function(resolve, reject){
    // I will make call..
    reject("500 error");
});

apiCall.then(function(data){
    console.log("Data is success!")
}).catch(function(error){
    console.log(error);
});

// .catch() runs ONLY when the Promise is rejected.
// .then() is completely skipped
