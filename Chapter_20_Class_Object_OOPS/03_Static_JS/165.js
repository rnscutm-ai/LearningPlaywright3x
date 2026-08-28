class Student{
    static collegeName = "PW BATCH";
    constructor(name){
        this.name = name;
    }
    static display(){
        console.log(this.name + "are part of the", Student.collegeName)
    }
}
let amit = new Student("amit");
let ajay = new Student("ajay");
let akhil = new Student("akhil");
let rabi = new Student("rabi");

console.log(Student.collegeName);
console.log(amit.name);
console.log(rabi.name);
