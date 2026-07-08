class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    introduce() : string {
        return `Hi, I am ${this.name}, my age is ${this.age}`
    }
}

const person = new Person('Alice', 23)
console.log(person.introduce())