const fs = require('fs');

function myReadFile(cb) {
    return new Promise((resolve) => {
        fs.readFile('a.txt', 'utf-8', (err, data) => {
            if(err) {
                console.log(err);
            }
            resolve(data);
        });
    });
}

function onDone(data) {
    console.log(data);
}

myReadFile().then(onDone);