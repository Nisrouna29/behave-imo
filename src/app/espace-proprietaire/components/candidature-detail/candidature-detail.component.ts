import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidature-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './candidature-detail.component.html',
  styleUrls: ['./candidature-detail.component.css']
})
export class CandidatureDetailComponent implements OnInit {
  currentStatus: string = 'Acceptée';
  isStatusModified: boolean = false;
  showStatusDropdown: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigate(['/espace-proprietaire/candidatures']);
  }

  contactCandidate(): void {
    // Logique pour contacter le candidat
    console.log('Contact du candidat');
  }

  modifyStatus(): void {
    if (!this.isStatusModified) {
      this.showStatusDropdown = !this.showStatusDropdown;
    }
  }

  selectStatus(status: string): void {
    this.currentStatus = status;
    this.isStatusModified = true;
    this.showStatusDropdown = false;
    console.log('Statut modifié vers:', status);
  }

  getStatusClass(): string {
    switch (this.currentStatus) {
      case 'Acceptée':
        return 'bg-green-100 text-green-800';
      case 'Refusée':
        return 'bg-red-100 text-red-800';
      case 'En attente':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  downloadDocument(documentId: string): void {
    // Logique pour télécharger un document
    console.log('Téléchargement du document:', documentId);
  }
}
