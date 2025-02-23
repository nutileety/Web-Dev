const express = require('express');
const { number } = require('zod');
const app = express();

app.get('/add', (req, res) => {
    const val1 = Number(req.query.a);
    const val2 = Number(req.query.b);

    if(isNaN(val1) || isNaN(val2))
        return res.status(400).json({error: "Both query parameter must be a valid number!"});
    else
        return res.status(200).json({Add: val1+val2});
});

app.get('/sub', (req, res) => {
    const val1 = Number(req.query.a);
    const val2 = Number(req.query.b);


    if(isNaN(val1) || isNaN(val2))
        return res.status(400).json({error: "Both query parameter must be a valid number!"});
    else
        return res.status(200).json({Sub: val1-val2});
});

app.get('/multi', (req, res) => {
    const val1 = Number(req.query.a);
    const val2 = Number(req.query.b);


    if(isNaN(val1) || isNaN(val2))
        return res.status(400).json({error: "Both query parameter must be a valid number!"});
    else
        return res.status(200).json({Multi: val1 * val2});
}); 

app.get('/divi', (req, res) => {
    const val1 = Number(req.query.a);
    const val2 = Number(req.query.b);

    if(isNaN(val1) || isNaN(val2))
        return res.status(400).json({error: "Both query parameter must be a valid number!"});
    if(val2 === 0) 
        return res.status(403).json({msg: "Dividing by zero"});
    else
        return res.status(200).json({Divi: val1 / val2})
});

app.listen(3000, () => {
    console.log("The server is started at port 3000.");
});