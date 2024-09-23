const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const cron = require('node-cron');

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

// API untuk menerima data EEG dari frontend
app.post('/api/eeg-data', (req, res) => {
  const { sessionId, deviceId, eegValues } = req.body;

  const query = 'INSERT INTO eeg_signals (session_id, device_id, timestamp, eeg_values, created_at) VALUES ?';

  const values = eegValues.map((eeg) => [
    sessionId,
    deviceId,
    new Date(),
    JSON.stringify(eeg.eegValue), // Simpan sebagai JSON
    new Date(),
  ]);

  db.query(query, [values], (err, result) => {
    if (err) throw err;
    res.send({ success: true, message: 'EEG data saved successfully!' });
  });
});

// Fungsi Downsampling
function downsampleEEGData() {
  const downsamplingQuery = `
      INSERT INTO eeg_signal_downsampling (session_id, device_id, channel, time_bucket, avg_signal, created_at)
      SELECT
          session_id,
          device_id,
          channel,
          DATE_FORMAT(FROM_UNIXTIME(timestamp), '%Y-%m-%d %H:%i:00') AS time_bucket,
          AVG(signal_value) AS avg_signal,
          NOW() AS created_at
      FROM
          eeg_signals
      WHERE
          created_at < NOW() - INTERVAL 7 DAY
      GROUP BY
          session_id, device_id, channel, time_bucket;
  `;

  db.query(downsamplingQuery, (err, result) => {
    if (err) {
      console.error('Error during downsampling:', err);
      return;
    }
    console.log('Downsampling completed:', result);
  });
}

// Menjadwalkan tugas setiap 7 hari
cron.schedule('0 0 */7 * *', () => {
  console.log('Running downsampling task...');
  downsampleEEGData(); // Memanggil fungsi downsampling
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
