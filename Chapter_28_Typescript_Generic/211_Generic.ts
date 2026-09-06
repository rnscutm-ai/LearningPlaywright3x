// Generic():- Generics let you write code that works with **ANY type while staying type-safe.**
// Generic types are a powerful way to create reusable components in TypeScript. 
// They allow you to define a function, class, or interface 
// that can work with different data types without losing the benefits of type safety.
// Generic function: `function getFirst<T>(arr: T[]): T` 
// `<T>`  is a placeholder -> replaced with the actual type when you call the function.
// Generic class: `class DataStore<T> { private items: T[] = [] }` 
// Generic class: class DataStore<T> { private items: T[] = [] }
// Generic interface: `interface APIResponse<T> { status: number; data: T }`
// Generic constraints: `function logLength<T extends { length: number }>(arg: T): void`
// Multiple type params: `function pair<K, V>(key: K, value: V)`
// Multiple type params: function pair<K, V>(key: K, value: V)
// Real use: `parseResponse<UserData>(res)` vs `parseResponse<OrderData>(res)` 
// -> same function, different types .

function getString(name: string): string {
    return name;
}
getString("Hello, TypeScript!"); // Returns: "Hello, TypeScript!"
//getString(42); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

function getFirstResult<T>(result: T[]): T {
    return result[0]!; //!-Non-null assertion operator, tells TypeScript that result[0] is not null or undefined.
}
let firstNumber = getFirstResult<number>([100, 200, 300]); // Returns: 100
console.log("First number:", firstNumber); // Returns: 100  

let firstString = getFirstResult<string>(["Alice", "Bob", "Charlie"]);
console.log("First string:", firstString); // Returns: "Alice"

let firstBoolean = getFirstResult<boolean>([true, false, true]);
console.log("First boolean:", firstBoolean); // Returns: true
