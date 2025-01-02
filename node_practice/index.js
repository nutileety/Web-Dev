const express = require('express');
const app = express();

// created this variable which act like database
const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

// using the middlewares
app.use(express.json());

app.get('/', (req, res) => {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfhealthyKidneys = 0;
    for(let i=0; i<numberOfKidneys; i++) {
        if(johnKidneys[i].healthy) {
            numberOfhealthyKidneys += 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfhealthyKidneys;
    res.json({numberOfKidneys,
        numberOfhealthyKidneys,
        numberOfUnhealthyKidneys
    });
});

app.post('/', (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy 
    });
    res.json({
        msg: "Done"
    });
});

app.put('/', (req, res) => {
    for(let i=0; i<users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
});

app.delete('/',(req, res) => {
    const newKidneys = [];
    for(let i=0; i<users[0].kidneys.length; i++) {
        if(users[0].kidneys[i].healthy) {
            newKidneys.push({
                healthy: true
            });
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg: "done"});
});

app.listen(3001, () => {
    console.log("The server is started...");
});