function placeOrder(item, callback) {
    console.log("Order placed...");
    callback();
}
placeOrder("Pizza", function() {
    console.log("Order received. Preparing your Pizza...");
});

//-------------------

//Define
function print(){
    console.log("Normal Fn- done with the order");
}
//First way
placeOrder("Pizza", print);

//Second way
placeOrder("Pizza", function(){
    console.log("Order received. Preparing your Pizza...");
});

// Third way - Arrow Function - most widely used
placeOrder("Burger",() =>{
    console.log("Arrow fn - I am also a fn without name!");
});
