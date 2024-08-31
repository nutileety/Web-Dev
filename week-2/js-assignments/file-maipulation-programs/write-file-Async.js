let fs = require('fs');

//writting the data to the file write.txt
let data = "Hi, I am written into the file write.txt";

fs.writeFile('write.txt',data, (err) => {
    if(err)
        console.log("The file is not capable of writing a data...!");
    });

//Reading the content which is written inside the write.txt file
let read = (err,content) => {
    if(err)
        console.log("The file not found...!");
    else
        console.log(content);
}

fs.readFile('write.txt','utf8',read);
