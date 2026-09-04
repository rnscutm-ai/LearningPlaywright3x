function infiniteLoop(): never {
    while (true) {
        // This function will never return(throws or infinite loop)
    }
}

function throwError(message: string): never {
    throw new Error(message);
}