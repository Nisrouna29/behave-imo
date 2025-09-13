import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Input() itemsPerPage: number = 6;
  @Input() totalItems: number = 0;
  @Output() pageChange = new EventEmitter<number>();

  get visiblePages(): number[] {
    const pages: number[] = [];
    const maxVisible = 5;
    const halfVisible = Math.floor(maxVisible / 2);
    
    let start = Math.max(1, this.currentPage - halfVisible);
    let end = Math.min(this.totalPages, start + maxVisible - 1);
    
    // Adjust start if we're near the end
    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1);
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    return pages;
  }

  get showFirstPage(): boolean {
    return this.visiblePages[0] > 1;
  }

  get showLastPage(): boolean {
    return this.visiblePages[this.visiblePages.length - 1] < this.totalPages;
  }

  get showFirstEllipsis(): boolean {
    return this.visiblePages[0] > 2;
  }

  get showLastEllipsis(): boolean {
    return this.visiblePages[this.visiblePages.length - 1] < this.totalPages - 1;
  }

  onPageChange(page: number) {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.pageChange.emit(page);
    }
  }

  onPrevious() {
    if (this.currentPage > 1) {
      this.onPageChange(this.currentPage - 1);
    }
  }

  onNext() {
    if (this.currentPage < this.totalPages) {
      this.onPageChange(this.currentPage + 1);
    }
  }

  get startItem(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  get endItem(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
  }
}
