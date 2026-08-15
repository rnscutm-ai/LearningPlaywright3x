function test(test, callMeWhenDone){
    console.log("Start the Test case");
    callMeWhenDone();
}
test("Verify login page is working fine",async(page)=>{

});

//-------------
function shopping(item, callMeWhenStoreIsEmpty){
    console.log("Store is busy");
    //...
    console.log("Store is empty");
    callMeWhenStoreIsEmpty();
}
shopping("Start Shopping", ()=>{
    console.log("Lets start shopping");
});