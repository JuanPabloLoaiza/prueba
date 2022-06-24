const db = require('../Lib/db.connection');

async function getUsers(req, res) {
    const rows = await db.manyOrNone('select * from "TestHelloBuild"."User"');
    return res.json(rows);
}

async function addUser(req, res) {
    try {
        await db.none(`insert into "TestHelloBuild"."User" ("email", "password") values ($1, $2)`,
            [req.body.email, req.body.password]);
        return res.json({ message: 'User created successfully' });
    }
    catch (error) {
        return res.json({ message: error.message });
    }
}

module.exports = {
    getUsers,
    addUser
}