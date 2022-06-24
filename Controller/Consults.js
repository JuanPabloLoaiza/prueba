const { Client } = require('pg');
const connectionData = {
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'Bur11Caldas',
    port: 5432,
};

const obtainUser = async () => {
    const client = new Client(connectionData);
    await client.connect();
    const rows = await client.query('select * from "TestHelloBuild"."User"');
    console.log('Imprimir algo');
    const data = rows.rows[0];
    return data;
}

const db = obtainUser();

module.exports = db;
