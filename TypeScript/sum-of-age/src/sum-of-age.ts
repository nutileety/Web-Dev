interface userProfile {
    name: string;
    age: number;
}

function sumOfAge(user1: userProfile, user2: userProfile) {
    return user1.age + user2.age
}

const age = sumOfAge({name: 'Raj', age:22}, {name: 'Ram', age: 24}) 
console.log(age)