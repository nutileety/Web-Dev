const express = require('express');
const app = express();

function calSum(n) {
    let ans = 0;
    for(let i=0; i<n; i++) {
        ans += 1;
    }
    return ans;
}

app.get('/', (req, res) => {
    const n = req.query.n;
    const sum = calSum(n);
    res.send('Your answer ' + sum);
});

app.listen(3000, () => {
    console.log('The server is running...');
});