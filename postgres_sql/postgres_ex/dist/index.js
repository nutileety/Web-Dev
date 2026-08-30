"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pg_1 = require("pg");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const clientPg = new pg_1.Client("postgresql://neondb_owner:npg_YgFASc5yOKu7@ep-old-water-axolmmig-pooler.c-4.us-east-2.aws.neon.tech/neondb?sslmode=verify-full&channel_binding=require");
async function main() {
    await clientPg.connect();
}
app.get('/enter', async (req, res) => {
    const userTable = await clientPg.query('select * from user_details;');
    console.log(userTable.rows);
    res.json(userTable.rows);
});
app.post('/signup', async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const { street, city, country, pincode } = req.body;
    try {
        const insertUserQuery = `INSERT INTO user_details (username, email, password) VALUES ($1, $2, $3) returning id;`;
        const insertAddressQuery = `INSERT INTO Address (street, city, country, pincode, user_id) VALUES ($1, $2, $3, $4, $5);`;
        await clientPg.query("BEGIN");
        const userResponse = await clientPg.query(insertUserQuery, [username, email, password]);
        const user_id = userResponse.rows[0].id;
        await clientPg.query(insertAddressQuery, [street, city, country, pincode, user_id]);
        await clientPg.query('COMMIT');
        res.json("Data iserted successfully");
    }
    catch (error) {
        await clientPg.query('ROLLBACK');
        res.json(error);
    }
});
app.get("/metadata", async (req, res) => {
    const response = await clientPg.query(`SELECT u.id, u.username, u.email, a.street, a.city, a.country, a.pincode
    FROM user_details u FULL JOIN Address a ON u.id = a.user_id;`);
    res.json({ response: response.rows });
});
app.listen(3000, () => {
    console.log("server is running at 3000");
});
main();
//# sourceMappingURL=index.js.map