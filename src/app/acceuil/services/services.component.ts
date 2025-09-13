import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services: Service[] = [
    {
      id: 1,
      title: 'Vente immobilière',
      description: 'Accompagnement personnalisé pour la vente de votre bien avec estimation gratuite et marketing digital.',
      icon: 'fa-solid fa-home'
    },
    {
      id: 2,
      title: 'Location',
      description: 'Gestion locative complète : recherche de locataires, suivi des paiements et maintenance.',
      icon: 'fa-solid fa-key'
    },
    {
      id: 3,
      title: 'Gestion des dossiers',
      description: 'Suivi complet des dossiers de location avec vérification des garanties et paiements.',
      icon: 'fa-solid fa-file-contract'
    }
  ];
}
