let order = new Promise(function(resolve, reject){
    let foodReady = false;
    if(foodReady){
        resolve("Pizza is delivered!") // callback1
    }
    else{
        reject("Order Cancelled") //callback2
    }
});
console.log(order);