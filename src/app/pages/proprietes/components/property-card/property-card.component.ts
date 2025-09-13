import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

export interface Property {
  id: number;
  title: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  price: string;
  status: string;
  image: string;
  type: string;
  isFavorite: boolean;
}

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css'
})
export class PropertyCardComponent {
  @Input() property!: Property;
  @Input() viewMode: 'grid' | 'list' = 'grid';
  @Output() toggleFavorite = new EventEmitter<number>();
  @Output() viewDetails = new EventEmitter<number>();

  constructor(private router: Router) {}

  onToggleFavorite() {
    this.toggleFavorite.emit(this.property.id);
  }

  onViewDetails() {
    this.viewDetails.emit(this.property.id);
    // Navigate to property detail page
    this.router.navigate(['/proprietes', this.property.id]);
  }
}
