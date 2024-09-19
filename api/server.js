const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Koneksi ke MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Ganti dengan password MySQL Anda
  database: 'eeg_data'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL Database!');
});

// API untuk menerima data EEG dari frontend dan menyimpannya ke tabel klasifikasi
app.post('/api/eeg-data', (req, res) => {
  const { nis, eegValues } = req.body;

  const query = 'INSERT INTO klasifikasi (nis, eegValues) VALUES (?, ?)';

  db.query(query, [nis, eegValues], (err, result) => {
    if (err) throw err;
    res.send({ success: true, message: 'EEG data saved successfully!' });
  });
});

// API untuk mengambil data EEG dari tabel klasifikasi
app.get('/api/eeg-data', (req, res) => {
  const query = `SELECT * FROM klasifikasi`;

  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Menjalankan server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} : http://localhost:${PORT}`);
});
