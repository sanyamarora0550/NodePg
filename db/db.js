const Pool = require("pg").Pool,
    db = new Pool({
        user: "postgres",
        password: "12345",
        database: "user_database",
        host: "localhost",
        port: 5432
    });

db.on('error', (err, client) => {
    console.error('Unexpected DB error on idle client --->>> ', err, client);
    // process.exit(-1)
})
module.exports = {
    db
}