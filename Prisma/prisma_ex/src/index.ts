import { prisma } from "./lib/prisma"
import express from "express";

const app = express();
app.use(express.json())

app.post("/user", async (req, res) => {
    const { username, password, age, city, title, description, done } = req.body;

    if (!username || !password || !title) {
        return res.status(400).json({ 
            error: "Username, password, and todo title are required fields." 
        });
    }

    try {
        const newUser = await prisma.user.create({
            data: {
                username,
                password, 
                age: age ? Number(age) : null, 
                city,
                todos: {
                    create: [{
                        title,
                        description,
                        done: Boolean(done)
                    }]
                }
            },
            include: {
                todos: true
            }
        });

        return res.status(201).json({
            message: "User and initial todo created successfully",
            data: newUser
        });

    } catch (error) {
        console.error("Error creating user:", error);

        return res.status(500).json({ error: "Internal server error." });
    }
});

app.get("/user/:id", async(req, res) => {
    const id = req.params.id
    const user =  await prisma.user.findUnique({
        where: {
            id: parseInt(id)
        },
        select:{
            username: true,
            age: true,
            todos: true
        }
    })

    return res.json({user})
})

app.listen(3000, () => {
    console.log("server is running in port 3000")
})