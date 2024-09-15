import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MuseClient } from 'muse-js';
import { AgCharts } from 'ag-charts-angular';
import { AgCartesianChartOptions } from 'ag-charts-community';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AgCharts],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  museClient: MuseClient;
  public chartOptions: AgCartesianChartOptions;
  eegData: {
    time: number;
    TP9: number;
    AF7: number;
    AF8: number;
    TP10: number;
  }[] = [];
  nis: number = 101;
  heartRate: number = 72;

  constructor(private http: HttpClient) {
    this.museClient = new MuseClient();
    this.chartOptions = {
      data: [],
      series: [
        { type: 'line', xKey: 'time', yKey: 'TP9', title: 'TP9' },
        { type: 'line', xKey: 'time', yKey: 'AF7', title: 'AF7' },
        { type: 'line', xKey: 'time', yKey: 'AF8', title: 'AF8' },
        { type: 'line', xKey: 'time', yKey: 'TP10', title: 'TP10' },
      ],
      axes: [
        { type: 'category', position: 'bottom', title: { text: 'Time (s)' } },
        {
          type: 'number',
          position: 'left',
          title: { text: 'EEG Signal (µV)' },
        },
      ],
    };
  }

  ngOnInit(): void {}

  async connectMuse(): Promise<void> {
    try {
      await this.museClient.connect();
      await this.museClient.start();

      let timeIndex = 0;

      this.museClient.eegReadings.subscribe((reading) => {
        // Print the structure of the reading for debugging
        console.log('EEG Reading:', reading);

        const samples = reading.samples;

        // Check if samples is an array and has the expected length
        if (Array.isArray(samples) && samples.length >= 4) {
          // Adjust these indices based on your specific Muse configuration
          const TP9 = samples[0]; // Replace with the correct index
          const AF7 = samples[1]; // Replace with the correct index
          const AF8 = samples[2]; // Replace with the correct index
          const TP10 = samples[3]; // Replace with the correct index

          // Store EEG data for each channel
          this.eegData.push({
            time: timeIndex++,
            TP9: TP9,
            AF7: AF7,
            AF8: AF8,
            TP10: TP10,
          });

          // Update chart data
          this.updateChartData();

          // Send EEG data to the backend
          this.http
            .post('http://localhost:3000/api/eeg-data', {
              nis: this.nis,
              eegValues: this.eegData,
            })
            .subscribe((response) => {
              console.log('Data saved:', response);
            });
        } else {
          console.error(
            'Samples data is not in the expected format. Data:',
            samples
          );
        }
      });
    } catch (error) {
      console.error('Error connecting to Muse:', error);
    }
  }

  updateChartData(): void {
    this.chartOptions = {
      ...this.chartOptions,
      data: this.eegData,
    };
  }

  fetchEEGData(): void {
    this.http
      .get('http://localhost:3000/api/eeg-data')
      .subscribe((data: any) => {
        const eegDataArray = data.map((entry: any) =>
          JSON.parse(entry.eegValues)
        );

        // Flatten the data and re-map it to the chart format
        this.eegData = eegDataArray.flat();
        this.updateChartData();
      });
  }
}
