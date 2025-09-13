import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proprietaire-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proprietaire-sidebar.component.html',
  styleUrl: './proprietaire-sidebar.component.css'
})
export class ProprietaireSidebarComponent {
  @Input() isSidebarCollapsed = false;
  @Input() isMobileMenuOpen = false;
  @Input() currentView = 'proprietes';
  @Output() toggleSidebar = new EventEmitter<void>();
  @Output() toggleMobileMenu = new EventEmitter<void>();
  @Output() closeMobileMenu = new EventEmitter<void>();
  @Output() menuItemClick = new EventEmitter<string>();

  onMenuItemClick(item: string) {
    this.menuItemClick.emit(item);
    this.closeMobileMenu.emit();
  }
}
