import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-locataire-accueil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class LocataireAccueilComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
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

  // Application methods
  viewAllApplications(): void {
    console.log('Voir toutes les candidatures');
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
}
