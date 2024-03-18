const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({

    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'socialengine'
});

module.exports = pool.promise();