const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

// Increase the limit for body parser
app.use(bodyParser.json({ limit: '50mb' })); // Adjust the limit as needed

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

  // Assuming eegValues is already an object, so we can store it as JSON
  const query = 'INSERT INTO klasifikasi (nis, eegValues) VALUES (?, ?)';

  db.query(query, [nis, JSON.stringify(eegValues)], (err, result) => {
    if (err) throw err;
    res.send({ success: true, message: 'EEG data saved successfully!' });
  });
});

// API untuk mengambil data EEG dari tabel klasifikasi berdasarkan created_at
app.get('/api/eeg-data', (req, res) => {
  const targetTimestamp = '2024-09-19 22:39:24'; // Timestamp yang diinginkan

  // Menambahkan kondisi WHERE pada query
  const query = 'SELECT * FROM klasifikasi WHERE created_at = ?';

  db.query(query, [targetTimestamp], (err, results) => {
    if (err) throw err;

    // Parse the JSON data in eegValues before sending it to the frontend
    results = results.map(result => {
      return {
        ...result,
        eegValues: JSON.parse(result.eegValues)
      };
    });

    res.json(results);
  });
});

// Menjalankan server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} : http://localhost:${PORT}`);
});
