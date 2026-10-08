const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  port: 3307, // <--- TAMBAH BARIS NI (sebab XAMPP anda guna port 3307)
  user: 'root',
  password: '', // Biarkan kosong jika guna XAMPP default
  database: 'exam_management',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;