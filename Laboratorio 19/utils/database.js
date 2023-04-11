const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'museo',
  password: '',
  port: 3306, // Puerto predeterminado de MySQL
});

module.exports = pool.promise();
