import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidatures',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './candidatures.component.html',
  styleUrls: ['./candidatures.component.css']
})
export class CandidaturesComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  goToAccueil(): void {
    this.router.navigate(['/espace-proprietaire']);
  }

  goToProprietes(): void {
    this.router.navigate(['/espace-proprietaire/proprietes']);
  }

  goToDossiersLocataires(): void {
    this.router.navigate(['/espace-proprietaire/dossiers-locataires']);
  }

  goToAcheteurs(): void {
    this.router.navigate(['/espace-proprietaire/acheteurs']);
  }

  goToStatistiques(): void {
    this.router.navigate(['/espace-proprietaire/statistiques']);
  }

  goToPlanning(): void {
    this.router.navigate(['/espace-proprietaire/planning']);
  }

  goToGestionPaye(): void {
    this.router.navigate(['/espace-proprietaire/gestion-paye']);
  }

  viewApplication(applicationId: string): void {
    this.router.navigate(['/espace-proprietaire/candidatures', applicationId]);
  }

  editApplication(applicationId: string): void {
    // Logique pour modifier la candidature
    console.log('Modification de la candidature:', applicationId);
  }

  deleteApplication(applicationId: string): void {
    // Logique pour supprimer la candidature
    console.log('Suppression de la candidature:', applicationId);
  }

  acceptApplication(applicationId: string): void {
    // Logique pour accepter la candidature
    console.log('Acceptation de la candidature:', applicationId);
  }

  rejectApplication(applicationId: string): void {
    // Logique pour refuser la candidature
    console.log('Refus de la candidature:', applicationId);
  }

  resetFilters(): void {
    // Logique pour réinitialiser les filtres
    console.log('Réinitialisation des filtres');
  }

  searchApplications(): void {
    // Logique pour rechercher les candidatures
    console.log('Recherche des candidatures');
  }
}
