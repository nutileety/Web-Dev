const fs = require('fs');
const path = require('path');
const dirPath = './files';

const express = require('express');
const app = express();
const port = 3000;

app.get('/files',(req, res) => {
    fs.readdir(dirPath, (err, files) => {
        if(err) {
            res.status(404).send("Unable to read the list of the fils"+err);
        }
        else {  
            const fileLists = files.map(file => path.basename(file));
            res.json({
                message: "The number of files in this dir are ", 
                files: fileLists
            });
        }
    });
}); 

app.get('/files/:fileName', (req, res) => {
    const fileName = req.params.fileName;
    const filedir = path.join(dirPath, fileName);
    fs.readFile(filedir, 'utf-8', (err, data) => {
        if(err) {
            return res.status(404).send("Unable to read the file");
        }
        else {
            return res.json({
                fileName: fileName, 
                data: data
            });
        }
    });
});

app.listen(port, () => {
    console.log(`The server is started at port ${port}`);
});