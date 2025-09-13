import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  transactionOptions = [
    { value: 'buy', label: 'Acheter' },
    { value: 'rent', label: 'Louer' }
  ];

  propertyTypes = [
    { value: 'all', label: 'Type' },
    { value: 'apartment', label: 'Appartement' },
    { value: 'house', label: 'Maison' }
  ];
}