// let p1 = {
//     name: "Benjamin",
//     sayHello: function () {
//         alert(`Hello! My name is ${this.name}`)
//     }
// }
// let p2 = {
//     name: "Ann Marie",
//     sayHello: function () {
//         alert(`Hello! My name is ${this.name}`)

//     }
// }
// let p3 = {
//     name: "George",
//     sayHello: function () {
//         alert(`Hello! My name is ${this.name}`)

//     }
// }
// let p4 = {
//     name: "Jack",
//     sayHello: function () {
//         alert(`Hello! My name is ${this.name}`)

//     }
// }
// let p5 = {
//     name: "Emily",
//     sayHello: function () {
//         alert(`Hello! My name is ${this.name}`)

//     }
// }
// p1.sayHello()
// p2.sayHello()
// p3.sayHello()
// p4.sayHello()
// p5.sayHello()

// function Person(name, city, age) {
//     this.name = name;
//     this.city = city;
//     this.age = age;
// }
// Person.prototype.sayHello = function () {
//     console.log(`Hey! My name is ${this.name}. I am ${this.age} years old and live in ${this.city}`);
// }
// let p1= new Person ("Benjamin","New Orleans","27");
// p1.sayHello();
// let p2 = new Person ("Jack", "New Orleans", "55");
// p2.sayHello();
// let p3 = new Person ("Ann Marie", "New Orleans", "54")
// p3.sayHello();
// let p4 = new Person ("George", "Panama City Beach", "27");
// p4.sayHello();
// let p5 = new Person ("Emily", "Birmingham", "26");
// p5.sayHello();

class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    sayHello() {
        console.log(`Hey! My Name is ${this.name}. I am ${this.age} years old and I live in ${this.city}.`)
    }
}
let p1= new Person ("Benjamin","New Orleans","27");
p1.sayHello();
let p2 = new Person ("Jack", "New Orleans", "55");
p2.sayHello();
let p3 = new Person ("Ann Marie", "New Orleans", "54")
p3.sayHello();
let p4 = new Person ("George", "Panama City Beach", "27");
p4.sayHello();
let p5 = new Person ("Emily", "Birmingham", "26");
p5.sayHello();

