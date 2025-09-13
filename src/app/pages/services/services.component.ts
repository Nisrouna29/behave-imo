import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedHeaderComponent } from '../../shared/header/shared-header.component';
import { FooterComponent } from '../../acceuil/footer/footer.component';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedHeaderComponent, FooterComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesPageComponent {
  activeRoute = '/services';

  services = signal<Service[]>([
    {
      id: 1,
      title: 'Vente immobilière',
      description: 'Accompagnement personnalisé pour la vente de votre bien avec estimation gratuite et marketing digital.',
      icon: 'fa-solid fa-home',
      features: [
        'Estimation gratuite de votre bien',
        'Accompagnement personnalisé',
        'Marketing digital et traditionnel',
        'Négociation des meilleurs prix',
        'Suivi complet du dossier'
      ],
      price: 'Commission 3%'
    },
    {
      id: 2,
      title: 'Location',
      description: 'Gestion locative complète : recherche de locataires, suivi des paiements et maintenance.',
      icon: 'fa-solid fa-key',
      features: [
        'Recherche de locataires qualifiés',
        'Gestion des visites',
        'Étude de solvabilité',
        'Rédaction des contrats',
        'Suivi des loyers et paiements'
      ],
      price: '1 mois de loyer'
    },
    {
      id: 3,
      title: 'Gestion des dossiers',
      description: 'Suivi complet des dossiers de location avec vérification des garanties et paiements.',
      icon: 'fa-solid fa-file-contract',
      features: [
        'Vérification des garanties locataires',
        'Suivi des paiements mensuels',
        'Gestion des impayés',
        'Renouvellement des contrats',
        'Reporting régulier'
      ],
      price: '8% du loyer/mois'
    }
  ]);

  selectedService = signal<Service | null>(null);

  selectService(service: Service) {
    this.selectedService.set(service);
  }

  closeServiceDetails() {
    this.selectedService.set(null);
  }
}
