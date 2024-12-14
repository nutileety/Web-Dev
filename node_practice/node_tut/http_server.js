var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer((req, res) => {
    console.log("Done!");
    // console.log(req);
    // console.log(req.url); //prints the requested url
    // console.log(req.headers); //prints the header of the http request
    var log = `${Date.now()}: ${req.url} request received.\n `;
    if(req.url === '/favicon.ico') return res.end();

    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    
    fs.appendFile('log.txt', log, (err) =>
    {
        switch(myUrl.pathname)
        {
            case '/':
                res.end('Home');
                break;
            case '/about':
                const username = myUrl.query.myname;
                res.end(`Hi! ${username}`);
                break;
            case '/search':
                const mysearch = myUrl.query.search_query;
                res.end(`The search result is: ${mysearch}`);
                break;
            default:
                res.end('This not a valid one');
                break;
        }
    });
});

server.listen(8000, () => {
    console.log("The server is started");
})