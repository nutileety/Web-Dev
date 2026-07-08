"use strict";
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `Hi, I am ${this.name}, my age is ${this.age}`;
    }
}
const person = new Person('Alice', 23);
console.log(person.introduce());
