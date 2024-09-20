import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'; // Import MatDialog
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MuseClient } from 'muse-js';
import { AgCharts } from 'ag-charts-angular';
import { AgCartesianChartOptions } from 'ag-charts-community';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component'; // Import dialog component

@Component({
  selector: 'app-connection',
  standalone: true,
  imports: [CommonModule, AgCharts, MatButtonModule, MatDialogModule], // Import MatDialogModule
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css'],
})
export class ConnectionComponent implements OnInit {
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
  updateInterval: number = 10;
  updateIntervalId: any;
  isConnected: boolean = false;
  beforeFinished: boolean = false;

  constructor(private http: HttpClient, public dialog: MatDialog) { // Inject MatDialog
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

  ngOnInit(): void {
    this.fetchEEGData();
  }

  async connectMuse(): Promise<void> {
    try {
      await this.museClient.connect();
      await this.museClient.start();
      this.isConnected = true;

      let timeIndex = 0;

      this.museClient.eegReadings.subscribe((reading) => {
        const samples = reading.samples;

        if (Array.isArray(samples) && samples.length >= 4) {
          const TP9 = samples[0];
          const AF7 = samples[1];
          const AF8 = samples[2];
          const TP10 = samples[3];

          this.eegData.push({
            time: timeIndex++,
            TP9: TP9,
            AF7: AF7,
            AF8: AF8,
            TP10: TP10,
          });

          if (!this.updateIntervalId) {
            this.startRealTimeUpdate();
          }
        } else {
          console.error('Samples data is not in the expected format. Data:', samples);
        }
      });
    } catch (error) {
      console.error('Error connecting to Muse:', error);
    }
  }

  async disconnectMuse(): Promise<void> {
    try {
      if (this.isConnected) {
        await this.museClient.disconnect();
        this.stopRealTimeUpdate();
        this.isConnected = false;
        this.beforeFinished = true;

        console.log('Disconnected from Muse.');
      }
    } catch (error) {
      console.error('Error disconnecting from Muse:', error);
    }
  }

  // Open confirmation dialog when user clicks "Finish"
  finishScanning(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Data classification started...');
        // Simulate the classification process and redirect to result page
        setTimeout(() => {
          window.location.href = '/result';
        }, 2000); // Simulate 2-second classification delay
      } else {
        console.log('User canceled the finish operation.');
      }
    });
  }

  startRealTimeUpdate(): void {
    this.updateIntervalId = setInterval(() => {
      this.updateChartData();

      if (this.eegData.length > 0) {
        this.sendDataToBackend();
      }
    }, this.updateInterval);
  }

  stopRealTimeUpdate(): void {
    if (this.updateIntervalId) {
      clearInterval(this.updateIntervalId);
      this.updateIntervalId = null;
    }
  }

  updateChartData(): void {
    this.chartOptions = {
      ...this.chartOptions,
      data: this.eegData.slice(-100),
    };
  }

  sendDataToBackend(): void {
    this.http
      .post('http://localhost:3000/api/eeg-data', {
        nis: this.nis,
        eegValues: JSON.stringify(this.eegData),
      })
      .subscribe((response) => {
        console.log('Data saved:', response);
      });
  }

  fetchEEGData(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/eeg-data');
  }
}
