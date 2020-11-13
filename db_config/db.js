require('dotenv').config();
const Pool = require("pg").Pool,
    db = new Pool({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    });

db.on('error', (err, client) => {
    console.error('Unexpected DB error on idle client --->>> ', err, client);
    // process.exit(-1)
})
module.exports = {
    db
}