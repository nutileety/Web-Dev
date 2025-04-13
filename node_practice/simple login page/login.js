const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const SECRET = "123thetokenisencoding";

app.use(express.json());

const users = [];

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    });

    res.json({
        msg: "Signed up successfully"
    });
});

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;
    try {
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === username && users[i].password === password) {
                foundUser = users[i];
                break;
            }
        }

        if (foundUser) {
            const token = jwt.sign({ username: foundUser.username }, SECRET);
            return res.json({ token });
        } else {
            return res.send("Invalid user credentials");
        }
    }
    catch(err) {
        console.log("Invalid user credential", err);
    }
    
});

function auth(req, res, next) {
    const token = req.headers.token;

    // If no token is provided, respond with a 401 error
    if (!token) {
        return res.status(401).send("Token is required");
    }

    try {
        // Verify the token
        const decodedUser = jwt.verify(token, SECRET);

        // Attach the username to the request object so that other routes can use it
        req.username = decodedUser.username;

        // Proceed to the next middleware or route handler
        next();
    } catch (err) {
        // If the token is invalid or expired, handle the error
        return res.status(401).send("Invalid token credentials");
    }
}
   

app.get('/me', auth, (req, res) => {
    const username = req.username;

    // Look for the user by username
    const foundUser = users.find(user => user.username === username);

    if (!foundUser) {
        console.log("User not found:", username);
        return res.status(404).send("User not found");
    }

    // If the user is found, return the user info
    return res.json({
        username: foundUser.username,
        password: foundUser.password
    });
});



app.listen(3000, () => {
    console.log("The server is started...");
})

