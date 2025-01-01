const express = require('express');
const app = express();

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

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

app.listen(3001, () => {
    console.log("The server is started...");
})