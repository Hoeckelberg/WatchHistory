const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: "localhost",
    user: "root",
    database: "db_progress",
    password: "",
    connectionLimit: 5
});

module.exports = {
    pool
};