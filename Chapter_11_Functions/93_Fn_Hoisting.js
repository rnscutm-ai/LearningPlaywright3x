function getUserStatus() {
    console.log(status);       // undefined (hoisted within function)
    var status = "Active";
    console.log(status);       // "Active"
    return status;
}
getUserStatus();

// Note: var is function-scoped, so status is hoisted to
// the top of getUserStatus(), NOT the global scope.