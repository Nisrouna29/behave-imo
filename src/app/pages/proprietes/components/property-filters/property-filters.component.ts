import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FilterData {
  transaction: string;
  type: string;
  location: string;
  bedrooms: string;
  minPrice: string;
  maxPrice: string;
  sortBy: string;
}

@Component({
  selector: 'app-property-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-filters.component.html',
  styleUrl: './property-filters.component.css'
})
export class PropertyFiltersComponent {
  @Output() filterChange = new EventEmitter<FilterData>();
  @Output() search = new EventEmitter<void>();

  // Filter values
  selectedTransaction = 'Type de transaction';
  selectedType = 'Type de bien';
  selectedLocation = '';
  selectedBedrooms = 'Chambres';
  minPrice = '';
  maxPrice = '';
  sortBy = 'Prix croissant';

  onTransactionChange(event: Event) {
    this.selectedTransaction = (event.target as HTMLSelectElement).value;
    this.emitFilterChange();
  }

  onTypeChange(event: Event) {
    this.selectedType = (event.target as HTMLSelectElement).value;
    this.emitFilterChange();
  }

  onLocationChange(event: Event) {
    this.selectedLocation = (event.target as HTMLInputElement).value;
    this.emitFilterChange();
  }

  onBedroomsChange(event: Event) {
    this.selectedBedrooms = (event.target as HTMLSelectElement).value;
    this.emitFilterChange();
  }

  onMinPriceChange(event: Event) {
    this.minPrice = (event.target as HTMLInputElement).value;
    this.emitFilterChange();
  }

  onMaxPriceChange(event: Event) {
    this.maxPrice = (event.target as HTMLInputElement).value;
    this.emitFilterChange();
  }

  onSortChange(event: Event) {
    this.sortBy = (event.target as HTMLSelectElement).value;
    this.emitFilterChange();
  }

  onSearch() {
    this.search.emit();
  }

  private emitFilterChange() {
    this.filterChange.emit({
      transaction: this.selectedTransaction,
      type: this.selectedType,
      location: this.selectedLocation,
      bedrooms: this.selectedBedrooms,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      sortBy: this.sortBy
    });
  }

  getTransactionTypes() {
    return ['Type de transaction', 'Acheter', 'Louer'];
  }

  getPropertyTypes() {
    return ['Type de bien', 'Appartement', 'Maison', 'Villa', 'Loft', 'Studio', 'Duplex'];
  }

  getBedroomOptions() {
    return ['Chambres', '1+', '2+', '3+', '4+'];
  }

  getSortOptions() {
    return ['Prix croissant', 'Prix décroissant', 'Plus récent', 'Surface'];
  }
}
