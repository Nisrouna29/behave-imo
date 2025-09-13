import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mes-contrats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mes-contrats.component.html',
  styleUrls: ['./mes-contrats.component.css']
})
export class MesContratsComponent {
  contracts = [
    {
      id: 1,
      type: 'Bail de location',
      status: 'Actif',
      startDate: '15 Mars 2023',
      endDate: '14 Mars 2026',
      rent: 2450,
      deposit: 2450,
      property: {
        name: 'Appartement Parisien',
        address: '75 Avenue des Champs-Élysées, 75008 Paris',
        surface: '85 m²',
        rooms: '3 pièces',
        floor: '4ème'
      },
      landlord: {
        name: 'Marie Dubois',
        email: 'marie.dubois@email.com',
        phone: '01 42 86 73 95'
      },
      documents: [
        { name: 'Contrat_de_location.pdf', size: '2.4 MB', downloads: 3 },
        { name: 'Annexe_garantie.pdf', size: '1.2 MB', downloads: 1 },
        { name: 'Reglement_interieur.pdf', size: '0.8 MB', downloads: 2 }
      ],
      renewalDate: '15 Mars 2025',
      noticePeriod: '3 mois'
    }
  ];

  selectedContract: any = null;

  get activeContractsCount(): number {
    return this.contracts.filter(c => c.status === 'Actif').length;
  }

  selectContract(contract: any) {
    this.selectedContract = contract;
  }

  downloadDocument(document: any) {
    console.log('Téléchargement de:', document.name);
    // Logique de téléchargement
  }

  shareContract(contract: any) {
    console.log('Partage du contrat:', contract.type);
    // Logique de partage
  }

  viewContract(contract: any) {
    console.log('Consultation du contrat:', contract.type);
    // Logique d'affichage
  }
}