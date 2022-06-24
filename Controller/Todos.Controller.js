const db = require('../Lib/db.connection');

async function getTodos(req, res) {
    const rows = await db.manyOrNone(`select * from "TestHelloBuild"."Todo" where "email" = $1`,
        [req.params.email]);
    return res.json(rows);
}

async function addTodo(req, res) {
    try {
        await db.none(`insert into "TestHelloBuild"."Todo" ("title", "description", "done", "email") values ($1, $2, $3, $4)`,
            [req.body.title, req.body.description, req.body.done, req.body.email]);
        return res.json({ message: 'Todo created successfully' });
    }
    catch (error) {
        return res.json({ message: error.message });
    }
}

async function updateTodo(req, res) {
    try {
        await db.none(`update "TestHelloBuild"."Todo" set title = $1, description = $2, done = $3 where id = $4 and email = $5`,
            [req.body.title, req.body.description, req.body.done, req.body.id, req.body.email]);
        return res.json({ message: 'Todo updated successfully' });
    }
    catch (error) {
        return res.json({ message: error.message });
    }
}

async function deleteTodo(req, res) {
    try {
        await db.none(`delete from "TestHelloBuild"."Todo" where "id" = $1`,
            [req.params.id]);
        return res.json({ message: 'Todo deleted successfully' });
    }
    catch (error) {
        return res.json({ message: error.message });
    }
}

module.exports = {
    getTodos,
    addTodo,
    updateTodo,
    deleteTodo
}