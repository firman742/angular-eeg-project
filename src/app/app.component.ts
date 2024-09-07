import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
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
export class AppComponent {
  eegData: number[] = [];
  museClient: MuseClient;

  constructor() {
    this.museClient = new MuseClient();
  }

  async connectMuse(): Promise<void> {
    try {
      // Connect to the Muse device
      await this.museClient.connect();
      await this.museClient.start();

      console.log('Connected to Muse!');

      // Subscribe to EEG data streams
      this.museClient.eegReadings.subscribe(reading => {
        // Flattening the data from multiple channels
        const data = reading.samples.map(sample => sample).flat();
        console.log('EEG Data:', data);

        // Store the data in an array to display in the template
        this.eegData = data;
      });
    } catch (error) {
      console.error('Error connecting to Muse:', error);
    }
  }
}
