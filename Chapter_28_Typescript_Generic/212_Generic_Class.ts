class TestDataStorage<T> {
    private items: T[] = [];
    addItem(item: T): void {
        this.items.push(item);
    }
getFirst(): T {
return this.items[0]!; 
} 
getAll(): T[] {
return this.items;
}
count(): number {
return this.items.length;    
}
}
let statuscodeNumbers = new TestDataStorage<number>();
let testNameStore = new TestDataStorage<string>();
statuscodeNumbers.addItem(200);
statuscodeNumbers.addItem(404);
console.log("First status code:", statuscodeNumbers.getFirst());
console.log("All status codes:", statuscodeNumbers.getAll());
console.log("Total status codes stored:", statuscodeNumbers.count());