import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tenant-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tenant-detail.component.html',
  styleUrls: ['./tenant-detail.component.css']
})
export class TenantDetailComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigate(['/espace-proprietaire/dossiers-locataires']);
  }

  downloadDossier(): void {
    // Logique pour télécharger le dossier
    console.log('Téléchargement du dossier');
  }

  editTenant(): void {
    // Logique pour modifier le locataire
    console.log('Modification du locataire');
  }

  addDocument(): void {
    // Logique pour ajouter un document
    console.log('Ajout d\'un document');
  }

  viewDocument(docId: string): void {
    // Logique pour voir un document
    console.log('Visualisation du document:', docId);
  }

  downloadDocument(docId: string): void {
    // Logique pour télécharger un document
    console.log('Téléchargement du document:', docId);
  }

  addNote(): void {
    // Logique pour ajouter une note
    console.log('Ajout d\'une note');
  }

  acceptTenant(): void {
    // Logique pour accepter le locataire
    console.log('Locataire accepté');
    // Rediriger vers la liste
    this.router.navigate(['/espace-proprietaire/dossiers-locataires']);
  }

  rejectTenant(): void {
    // Logique pour refuser le locataire
    console.log('Locataire refusé');
    // Rediriger vers la liste
    this.router.navigate(['/espace-proprietaire/dossiers-locataires']);
  }
}
