import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent, Property } from '../property-card/property-card.component';
import { PaginationComponent } from '../../../../shared/pagination/pagination.component';

@Component({
  selector: 'app-property-grid',
  standalone: true,
  imports: [CommonModule, PropertyCardComponent, PaginationComponent],
  templateUrl: './property-grid.component.html',
  styleUrl: './property-grid.component.css'
})
export class PropertyGridComponent {
  @Input() properties: Property[] = [];
  @Input() totalProperties: number = 0;
  @Input() viewMode: 'grid' | 'list' = 'grid';
  @Input() currentPage: number = 1;
  @Input() itemsPerPage: number = 6;
  @Output() toggleFavorite = new EventEmitter<number>();
  @Output() viewDetails = new EventEmitter<number>();
  @Output() toggleViewMode = new EventEmitter<void>();
  @Output() pageChange = new EventEmitter<number>();

  get totalPages(): number {
    return Math.ceil(this.totalProperties / this.itemsPerPage);
  }

  get paginatedProperties(): Property[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.properties.slice(startIndex, endIndex);
  }

  onToggleFavorite(propertyId: number) {
    this.toggleFavorite.emit(propertyId);
  }

  onViewDetails(propertyId: number) {
    this.viewDetails.emit(propertyId);
  }

  onToggleViewMode() {
    this.toggleViewMode.emit();
  }

  onPageChange(page: number) {
    this.pageChange.emit(page);
  }
}
