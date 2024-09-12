import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClient } from '@angular/common/http';
import { MuseClient } from 'muse-js';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  museClient: MuseClient;
  eegData: number[] = [];
  nis: number = 101;  // NIS siswa yang sedang melakukan tes

  // Chart.js configuration

  public lineChartLegend = true;

  constructor(private http: HttpClient) {
    this.museClient = new MuseClient();

  }

  ngOnInit(): void {}

  async connectMuse(): Promise<void> {
    try {
      await this.museClient.connect();
      await this.museClient.start();

      this.museClient.eegReadings.subscribe(reading => {
        const data = reading.samples.map(sample => sample).flat();
        this.eegData = data;

        // Simpan data EEG ke backend bersama dengan NIS dan hasil_tes
        const hasilTes = this.calculateTestResult(data);

        console.log(hasilTes);

        this.http.post('http://localhost:3000/api/eeg-data', {
          nis: this.nis,         // Nomor siswa yang sedang dites
          hasil_tes: hasilTes,   // Hasil tes EEG
          eegValues: data        // Data sinyal EEG
        }).subscribe(response => {
          console.log('Data saved:', response);
        });
      });
    } catch (error) {
      console.error('Error connecting to Muse:', error);
    }
  }

  // Fungsi untuk menghitung hasil_tes berdasarkan data EEG
  calculateTestResult(data: number[]): number {
    const sum = data.reduce((acc, val) => acc + val, 0);
    return sum / data.length;  // Misalnya, hasil tes bisa berupa rata-rata nilai EEG
  }

  fetchEEGData(): void {
    // Ambil data EEG dari MySQL dan tampilkan dalam chart
    this.http.get('http://localhost:3000/api/eeg-data')
      .subscribe((data: any) => {
        // Mengambil dan memproses data untuk Chart.js
        const eegDataArray = data.map((entry: any) => JSON.parse(entry.eegValues));
        const flattenedData = eegDataArray.flat();

      });
  }
}
