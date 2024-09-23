import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common'; // Import CommonModule

interface Item {
  name: string;
  time: string;
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatListModule, MatDividerModule, MatIconModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  items: Item[] = [
    { name: 'Item 1', time: '10:00 AM' },
    { name: 'Item 2', time: '11:00 AM' },
    { name: 'Item 3', time: '12:00 PM' },
  ];

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  viewDetails(item: Item) {
    console.log('Viewing details for:', item);
  }
}
