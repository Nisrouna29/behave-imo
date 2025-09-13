import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-paye',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gestion-paye.component.html',
  styleUrls: ['./gestion-paye.component.css']
})
export class GestionPayeComponent implements OnInit {
  selectedStatus: string = 'all';
  newMessage: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigate(['/espace-proprietaire']);
  }

  exportReport(): void {
    // Logique pour exporter le rapport
    console.log('Export du rapport');
  }

  viewPayment(paymentId: string): void {
    // Logique pour voir le paiement
    console.log('Visualisation du paiement:', paymentId);
  }

  downloadPayment(paymentId: string): void {
    // Logique pour télécharger le paiement
    console.log('Téléchargement du paiement:', paymentId);
  }

  sendReminder(paymentId: string): void {
    // Logique pour envoyer un rappel
    console.log('Envoi de rappel pour:', paymentId);
  }

  sendAlerts(): void {
    // Logique pour envoyer des rappels
    console.log('Envoi des rappels');
  }

  monthlyReport(): void {
    // Logique pour le rapport mensuel
    console.log('Rapport mensuel');
  }

  contactTenant(tenantId: string): void {
    // Logique pour contacter le locataire
    console.log('Contact du locataire:', tenantId);
  }

  viewDetails(detailsId: string): void {
    // Logique pour voir les détails
    console.log('Voir détails:', detailsId);
  }

  configurePayment(configId: string): void {
    // Logique pour configurer le paiement
    console.log('Configuration du paiement:', configId);
  }

  onStatusChange(): void {
    // Logique pour filtrer selon le statut sélectionné
    console.log('Statut sélectionné:', this.selectedStatus);
  }

  applyFilters(): void {
    // Logique pour appliquer les filtres
    console.log('Application des filtres avec statut:', this.selectedStatus);
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      console.log('Envoi du message:', this.newMessage);
      // Ici vous pouvez ajouter la logique pour envoyer le message
      // Par exemple, appeler un service pour envoyer le message
      this.newMessage = ''; // Vider l'input après envoi
    }
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  }
}
