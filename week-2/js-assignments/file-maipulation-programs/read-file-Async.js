let fs = require('fs');

let read = (err, data) => {
    console.log(data);
}

fs.readFile('a.txt','utf8',read);

let show = () => {
    console.log("Hi just calling the show function"); 
}

setTimeout(show, 5000);

let i = 0;
let print = () => {
    console.log("The value of i : ",i);
    i++;
    if(i > 10)
    {
        // setTimeout(print,5000);
        clearInterval(end);
    }
    
}
//  print();
const end = setInterval(print, 1000);

/* output:
output will print as per the setted time intervals
        This is read file of a.txt
    The value of i :  0
    The value of i :  1
    The value of i :  2
    The value of i :  3
    Hi just calling the show function
    The value of i :  4
    The value of i :  5
    The value of i :  6
    The value of i :  7
    The value of i :  8
    The value of i :  9
    The value of i :  10
*/
