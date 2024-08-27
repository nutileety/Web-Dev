const fs = require("fs");
fs.readFile("a.txt", "utf-8", function (err, contents) {
if (err)
    console.log(err);
else
    console.log(contents);
});