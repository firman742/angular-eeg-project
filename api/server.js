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

// API untuk menerima data EEG dari frontend
app.post('/api/eeg-data', (req, res) => {
  const { eegValues } = req.body;
  const query = 'INSERT INTO eeg_signals (data) VALUES (?)';

  db.query(query, [JSON.stringify(eegValues)], (err, result) => {
    if (err) throw err;
    res.send({ success: true, message: 'EEG data saved successfully!' });
  });
});

// API untuk mengambil data EEG dari MySQL
app.get('/api/eeg-data', (req, res) => {
  const query = 'SELECT * FROM eeg_signals';

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
