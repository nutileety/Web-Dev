var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
    console.log("Done!");
    // console.log(req);
    // console.log(req.url); //prints the requested url
    // console.log(req.headers); //prints the header of the http request

    var log = `${Date.now()}: ${req.url} request received.\n `;
    fs.appendFile('log.txt', log, (err) =>
    {
        if(err) {
            res.end(err);
        }
        else {
            res.end("Hi there, you are in http server");
        }
    })
});

server.listen(8000, () => {
    console.log("The server is started");
})