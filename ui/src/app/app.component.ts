import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClient } from '@angular/common/http';
import { MuseClient } from 'muse-js';
import { ChartConfiguration } from 'chart.js';
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

  // Chart.js configuration
  lineChartData: ChartConfiguration<'line'>['data'] = {
    datasets: [
      {
        data: [],
        label: 'EEG Data',
        borderColor: '#42A5F5',
        fill: true,
      }
    ]
  };

  lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: { min: -2000, max: 2000 }
    }
  };

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

        // Simpan data EEG ke backend
        this.http.post('http://localhost:3000/api/eeg-data', { eegValues: data })
          .subscribe(response => {
            console.log('Data saved:', response);
          });
      });
    } catch (error) {
      console.error('Error connecting to Muse:', error);
    }
  }

  fetchEEGData(): void {
    // Ambil data EEG dari MySQL dan tampilkan dalam chart
    this.http.get('http://localhost:3000/api/eeg-data')
      .subscribe((data: any) => {
        // Mengambil dan memproses data untuk Chart.js
        const eegDataArray = data.map((entry: any) => JSON.parse(entry.data));
        const flattenedData = eegDataArray.flat();

        // Update Chart.js dataset
        this.lineChartData.datasets[0].data = flattenedData.slice(-100);  // Menampilkan 100 data terakhir
      });
  }
}
