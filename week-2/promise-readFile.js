const fs = require('fs');

function setPromisified() {
    return new Promise(resolve => setTimeout(resolve, 5000));
}

function doneFile() {
    fs.readFile('pro-read.txt', 'utf8', (err,data) => {
        if(err)
        {
            console.log(err);
        }
        else {
            console.log(data);
        }
    });
    console.log('Reading is done..!');
}

setPromisified().then(doneFile);