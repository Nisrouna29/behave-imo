import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shared-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './shared-header.component.html',
  styleUrl: './shared-header.component.css'
})
export class SharedHeaderComponent {
  @Input() activeRoute: string = '';

  isMobileMenuOpen = false;

  navigationItems = [
    { label: 'Accueil', route: '/accueil' },
    { label: 'Propriétés', route: '/proprietes' },
    { label: 'Services', route: '/services' },
    { label: 'À propos', route: '/a-propos' },
    { label: 'Contact', route: '/contact' }
  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  isActiveRoute(route: string): boolean {
    return this.activeRoute === route;
  }
}
