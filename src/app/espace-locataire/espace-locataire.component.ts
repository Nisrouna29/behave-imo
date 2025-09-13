import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { LocataireSidebarComponent } from './components/sidebar/sidebar.component';


@Component({
  selector: 'app-espace-locataire',
  standalone: true,
  imports: [CommonModule, FormsModule, LocataireSidebarComponent, RouterOutlet],
  templateUrl: './espace-locataire.component.html',
  styleUrls: ['./espace-locataire.component.css']
})
export class EspaceLocataireComponent implements OnInit {
  isSidebarCollapsed: boolean = false;
  isMobileSidebarOpen: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialisation du composant
  }

  // Navigation methods
  navigateTo(route: string): void {
    console.log(`Navigation vers: ${route}`);
    // Ici vous pouvez implémenter la logique de navigation
    // this.router.navigate(['/espace-locataire', route]);
  }

  // Application methods
  viewAllApplications(): void {
    console.log('Voir toutes les candidatures');
  }

  // Quick actions methods
  contactOwner(): void {
    console.log('Contacter le propriétaire');
  }

  requestMaintenance(): void {
    console.log('Demande de maintenance');
  }

  downloadReceipt(receiptId?: string): void {
    if (receiptId) {
      console.log(`Télécharger quittance: ${receiptId}`);
    } else {
      console.log('Télécharger quittance');
    }
  }

  scheduleAppointment(): void {
    console.log('Prendre rendez-vous');
  }

  // Receipt methods
  viewAllReceipts(): void {
    console.log('Voir toutes les quittances');
  }

  // Message methods
  viewAllMessages(): void {
    console.log('Voir tous les messages');
  }

  // Contract methods
  viewContractDetails(): void {
    console.log('Voir détails du contrat');
  }

  downloadContract(): void {
    console.log('Télécharger contrat PDF');
  }

  // Maintenance methods
  createMaintenanceRequest(): void {
    console.log('Créer nouvelle demande de maintenance');
  }

  // Sidebar methods
  onToggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  onSidebarNavigate(route: string): void {
    console.log(`Navigation vers: ${route}`);
    console.log(`URL complète: /espace-locataire/${route}`);
    this.router.navigate(['/espace-locataire', route]);
    // Close mobile sidebar after navigation
    this.closeMobileSidebar();
  }

  // Mobile sidebar methods
  toggleMobileSidebar(): void {
    this.isMobileSidebarOpen = !this.isMobileSidebarOpen;
  }

  closeMobileSidebar(): void {
    this.isMobileSidebarOpen = false;
  }

}
