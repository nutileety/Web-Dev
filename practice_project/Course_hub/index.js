const express = require('express');
const { userRoute } = require('./Routes/user');
const { courseRoute } = require('./Routes/course');
const { adminRoute } = require('./Routes/admin');

const app = express();

app.use('/api/v1/user', userRoute);
app.use('/api/v1/admin', adminRoute);
app.use('/api/v1/course', courseRoute);

app.listen(3000, () => {
    console.log("The server is started...");
})