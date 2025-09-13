import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ProprietaireHeaderComponent } from './components/proprietaire-header/proprietaire-header.component';
import { ProprietaireSidebarComponent } from './components/proprietaire-sidebar/proprietaire-sidebar.component';

@Component({
  selector: 'app-espace-proprietaire',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ProprietaireHeaderComponent,
    ProprietaireSidebarComponent
  ],
  templateUrl: './espace-proprietaire.component.html',
  styleUrl: './espace-proprietaire.component.css'
})
export class EspaceProprietaireComponent {
  isSidebarCollapsed = false;
  isMobileMenuOpen = false;
  currentView = 'accueil'; // 'accueil', 'proprietes', 'dossiers-locataires', etc.

  constructor(private router: Router) {
    // Écouter les changements de route pour mettre à jour currentView
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const url = event.urlAfterRedirects;
        if (url.includes('/espace-proprietaire/')) {
          const segments = url.split('/');
          const lastSegment = segments[segments.length - 1];

          // Mapping des routes vers les vues de la sidebar
          if (lastSegment === 'ajouter-propriete') {
            this.currentView = 'proprietes'; // Garder "Propriétés" sélectionné
          } else if (lastSegment === 'candidatures' || lastSegment.startsWith('candidatures/')) {
            this.currentView = 'candidatures';
          } else if (lastSegment === 'dossiers-locataires' || lastSegment.startsWith('dossiers-locataires/')) {
            this.currentView = 'dossiers-locataires';
          } else if (lastSegment === 'gestion-paye') {
            this.currentView = 'gestion-paye';
          } else if (lastSegment === 'etat-lieux') {
            this.currentView = 'etat-lieux';
          } else if (lastSegment === 'chat') {
            this.currentView = 'chat';
          } else {
            this.currentView = lastSegment || 'accueil';
          }
        } else if (url === '/espace-proprietaire') {
          this.currentView = 'accueil';
        }
      });
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  onMenuItemClick(item: string) {
    this.router.navigate(['/espace-proprietaire', item]);
  }

  onLogout() {
    // Logique de déconnexion - rediriger vers la page de connexion
    this.router.navigate(['/authentication']);
  }
}
