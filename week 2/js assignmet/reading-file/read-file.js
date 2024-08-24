let fs = require('fs');

let read = fs.readFileSync('a.txt','utf8');
console.log(read);

let read1 =  fs.readFileSync('b.txt','utf8');
console.log(read1);