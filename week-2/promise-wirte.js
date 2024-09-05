const fs = require('fs');

function setPromisified() {
    return new Promise(resolve => setTimeout(resolve, 5000));
}

function writeFile() {
    console.log('Writing is started...');
    let data = "Hey there, This is the write file of promsified writting."
    fs.writeFile('pro-write.txt',data, (err) => {
         if(err) {
            console.log(err);
         }
         else {
            fs.readFile('pro-write.txt','utf8', (err,content) => {
                if(err)
                    console.log(err);
                else 
                    console.log(content);
            });
         }
    });
    console.log("Writting is done..!");
}

setPromisified().then(writeFile);