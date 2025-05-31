const express = require('express');
const { userRoute } = require('./Routes/user');
const { courseRoute } = require('./Routes/course');

const app = express();

app.use('/api/v1/user', userRoute);
app.use('/api/v1/course', courseRoute);

app.listen(3000, () => {
    console.log("The server is started...");
})