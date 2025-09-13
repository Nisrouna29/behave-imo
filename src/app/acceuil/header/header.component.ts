import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  constructor(private router: Router) {}

  navigationItems = [
    { label: 'Accueil', route: '/accueil' },
    { label: 'Propriétés', route: '/proprietes' },
    { label: 'Services', route: '/services' },
    { label: 'À propos', route: '/a-propos' },
    { label: 'Login', route: '/login' }
  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  navigateToHome(): void {
    this.router.navigate(['/accueil']);
  }
}
