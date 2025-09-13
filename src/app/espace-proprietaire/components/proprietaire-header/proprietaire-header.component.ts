import { Component, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proprietaire-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proprietaire-header.component.html',
  styleUrl: './proprietaire-header.component.css'
})
export class ProprietaireHeaderComponent {
  @Output() toggleMobileMenu = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();

  showUserMenu = false;

  constructor(private router: Router) {}

  toggleUserMenu(): void {
    this.showUserMenu = !this.showUserMenu;
  }

  onLogout(): void {
    this.logout.emit();
    this.showUserMenu = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.user-menu-container')) {
      this.showUserMenu = false;
    }
  }

  navigateToHome(): void {
    this.router.navigate(['/accueil']).then(() => {
      // Force reload if already on accueil page
      if (this.router.url === '/accueil') {
        window.location.reload();
      }
    });
  }
}
