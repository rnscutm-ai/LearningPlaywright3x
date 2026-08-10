function makeCounter(start = 0) {  // default parameter
    let count = start;

    return {
        increment() {count++;},
        decrement() {count--;},
        get() {return count;}
    };
} 

let counter = makeCounter(0);
counter.increment(); //even if execution closes, 
        //   the counter variable is still accessible because of closure
counter.increment();
counter.increment();
console.log(counter.get()); // 3
counter.decrement();
console.log(counter.get()); // 2