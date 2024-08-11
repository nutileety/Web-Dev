/* Creating a function that takes an array of objects as input,
and returns the users whose age > 18 and are male */

function above(user) {
    let arr = [];
    console.log("The Male who are above 18 are: ");
    for(let i=0; i<user.length; i++) {
        if( user[i].gender === "male" && user[i].age >= 18)
            arr.push(user[i]);
    }
    console.log(arr);
}

let user = [{
    name: "Tom",
    age: 22,
    gender: "male"
},
{
    name: "Jasmine",
    age: 17,
    gender: "female"
},
{
    name: "Ram",
    age: 21,
    gender: "male"
}];

above(user);
/* ouput: 
        The Male who are above 18 are:
        {name: 'Tom', age: 22, gender: 'male'}
        {name: 'Ram', age: 21, gender: 'male'}
*/