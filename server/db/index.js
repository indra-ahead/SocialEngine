import mysql from 'mysql2';

// Create a connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'socialengine'
});

const db = pool.promise();

export default db;