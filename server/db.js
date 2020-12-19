const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "102101",
    host: "localhost",
    port: 5432,
    database: "random",
    ssl:{ rejectUnauthorized: false }
});

module.exports = pool;