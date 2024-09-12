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
  password: '', // ganti dengan password MySQL Anda
  database: 'eeg_data'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL Database!');
});

// API untuk menerima data EEG dari frontend dan menyimpannya ke tabel klasifikasi
app.post('/api/eeg-data', (req, res) => {
  const { nis, hasil_tes, eegValues } = req.body;

  // Tentukan level berdasarkan hasil_tes
  let kode_level;
  if (hasil_tes < 40) {
    kode_level = 1; // Berat
  } else if (hasil_tes <= 85) {
    kode_level = 2; // Sedang
  } else {
    kode_level = 3; // Ringan
  }

  const query = 'INSERT INTO klasifikasi (nis, hasil_tes, kode_level) VALUES (?, ?, ?)';

  db.query(query, [nis, hasil_tes, kode_level], (err, result) => {
    if (err) throw err;
    res.send({ success: true, message: 'EEG data saved successfully!' });
  });
});

// API untuk mengambil data EEG dari tabel klasifikasi dan siswa
app.get('/api/eeg-data', (req, res) => {
  const query = `
    SELECT k.nis, s.nama, k.hasil_tes, l.kesiapan, l.deskripsi
    FROM klasifikasi k
    JOIN siswa s ON k.nis = s.nis
    JOIN level l ON k.kode_level = l.kode_level
  `;

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
