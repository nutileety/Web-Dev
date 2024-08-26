/* The function that takes a new object as input which has name, age and
 gender and greets the user with their gender */

let term;
function greet(user) {
    if (user.gender == "male" || user.gender == "Male")
        term = "Mr.";
    else
        term = "Mrs.";

    console.log(`Hi ${term}${user.name}, your age is ${user.age}`);

    if (user.age >= 18)
        console.log("Age is " + user.age + ",Can vote");
    else
        console.log("Age is " + user.age + ",Can not vote");
    
}

let user = {
    name: "Tom",
    age: 22,
    gender: "male"
};

let user1 = {
    name: "Jasmine",
    age: 17,
    gender: "Female"
};

//functon call
greet(user);
/* output:  
         Mr.Tom, your age is 22
         Age is 22,Can vote */

greet(user1);
/* ouput: 
        Hi Mrs.Jasmine, your age is 17
        Age is 17,Can not vote */