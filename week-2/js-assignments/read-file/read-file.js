let fs = require('fs');

let read_file = fs.readFileSync('a.txt','utf8');
console.log(read_file); // output: This is read file of a.txt

let read_file2 = fs.readFileSync('b.txt','utf8');
console.log(read_file2); // output: This is the text file of b.txt