const pgp = require("pg-promise")(/*options*/);

const db = pgp("postgres://postgres:Bur11Caldas@localhost:5432/postgres");

module.exports = db;