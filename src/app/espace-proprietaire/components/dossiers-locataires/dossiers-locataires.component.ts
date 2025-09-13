import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dossiers-locataires',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dossiers-locataires.component.html',
  styleUrl: './dossiers-locataires.component.css'
})
export class DossiersLocatairesComponent {
  selectedType: string = 'all';

  constructor(private router: Router) {}

  viewTenant(tenantId: string): void {
    this.router.navigate(['/espace-proprietaire/dossiers-locataires', tenantId]);
  }

  editTenant(tenantId: string): void {
    // Logique pour modifier le locataire
    console.log('Modification du locataire:', tenantId);
  }

  goToGestionPaye(): void {
    this.router.navigate(['/espace-proprietaire/gestion-paye']);
  }

  onTypeChange(): void {
    // Logique pour filtrer selon le type sélectionné
    console.log('Type sélectionné:', this.selectedType);
  }

  getTableTitle(): string {
    switch (this.selectedType) {
      case 'locataire':
        return 'Liste des locataires';
      case 'acheteur':
        return 'Liste des acheteurs';
      default:
        return 'Liste des locataires et acheteurs';
    }
  }

  deleteTenant(tenantId: string): void {
    // Logique pour supprimer le locataire/acheteur
    console.log('Suppression:', tenantId);
  }
}
