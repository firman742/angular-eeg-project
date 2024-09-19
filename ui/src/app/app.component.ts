import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // array data keeped
  eegData: {
    time: number;
    deltha: number;
    theta: number;
    alpha: number;
    gama: number;
    beta: number;
  }[] = [];

  // read data from muse

  // push data

  // visualize data as chart
}
