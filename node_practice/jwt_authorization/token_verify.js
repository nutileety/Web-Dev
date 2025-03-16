const express = require('express');
const app = express();

app.use(express.json());

const users = [];

function generateToken() {
    const options = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", 
        "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", 
        "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", 
        "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", 
        "s", "t", "u", "v", "w", "x", "y", "z"];
    let token = "";
    for(i=0; i<options.length; i++)
        token += options[Math.floor(Math.random() * options.length)];
    return token;
}

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username,
        password
    });
    return res.send("Signed Up Successfully");
});

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find((user) => user.username === username && user.password === password);

    if(user){
        const token = generateToken();
        user.token = token;
        res.json({token: token});
        console.log(users);
    }
    else {
        return res.status(403).json("Invalid usename and password");
    }
});

app.post('/me', (req, res) => {
    const token = req.headers.authorization;
    
    let findUser = null;
    for(i=0; i<users.length; i++) {
        if(users[i].token == token) {
            findUser = users[i];
        }

        if(findUser) {
            return res.status(200).json({
                username: findUser.username,
                password: findUser.password
            });
        }
        else{
            return res.status(403).send("The user token in invalid");
        }
    }
})

app.listen(3000, () => {
    console.log("The server is started on port 3000");
});