var fs = require('fs'); //importing file system to do file operations
var os = require('os'); //importing operating system to access details of os
var insert = require("./insert.js");   //importing from custom created file
var _ = require('lodash'); //importing lodash to manipulate array variables


//accessing the info fo os like username
var user = os.userInfo();
console.log(user);
console.log(user.username);

var data = fs.appendFile('write.txt','Hi! '+ user.username + '\n', ()=> {
    console.log("successfully added the text inside the file.");    
});

//getting age from "insert.js" file age variable
console.log("The age is: " + insert.age);

//using lodas module to manipulate array
var data1 = ["person", "person",3 , 4, 3, 4, 'done'];

var see = _.uniq(data1);
console.log("The unique data is: " + see);
console.log(_.isString("nan"));
