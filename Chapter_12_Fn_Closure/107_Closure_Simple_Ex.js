function makeRateLimiter(limit) {
    let calls = 0;
    function checkLimit() {
        calls++;
        return calls <= limit;
}
return checkLimit;
}

let rateLimiter = makeRateLimiter(3);
console.log(rateLimiter()); // true
console.log(rateLimiter()); // true
console.log(rateLimiter()); // true
console.log(rateLimiter()); // false