const zod = require('zod');
const express = require('express');
const app = express();

app.use(express.json());

function validate(obj) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    });
    const response = schema.safeParse(obj);
    return response;
}

app.post('/login', (req, res) => {
    const response = validate(req.body);
    if(!response.success) {
        res.json({msg: "The input is invalid"});
    }
    return res.json(response);
});


app.listen(3000, () => {
    console.log("The server is started..!");
});
