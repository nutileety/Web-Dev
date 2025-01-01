const express = require('express');
const app = express();

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

app.get('/', (req, res) => {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    const numberOfhealthyKidneys = 0;
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

app.listen(3001, () => {
    console.log("The server is started...");
})