import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {
  stats = [
    {
      value: '500+',
      label: 'Propriétés vendues',
      icon: 'fa-solid fa-home'
    },
    {
      value: '15',
      label: 'Années d\'expérience',
      icon: 'fa-solid fa-calendar'
    },
    {
      value: '98%',
      label: 'Clients satisfaits',
      icon: 'fa-solid fa-star'
    },
    {
      value: '24/7',
      label: 'Support client',
      icon: 'fa-solid fa-headset'
    }
  ];
}