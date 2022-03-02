const mysql = require('mysql');
const connection = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '123',
  database: 'test_db2'
});
module.exports = connection;