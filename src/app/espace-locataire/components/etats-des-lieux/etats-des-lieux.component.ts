import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-etats-des-lieux',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './etats-des-lieux.component.html',
  styleUrls: ['./etats-des-lieux.component.css']
})
export class EtatsDesLieuxComponent implements OnInit {

  // Données des états des lieux
  etatsDesLieux = [
    {
      id: 1,
      date: '15 Mars 2023',
      type: 'entree',
      typeLabel: 'État d\'entrée',
      statut: 'termine',
      statutLabel: 'Terminé',
      inspecteur: 'M. Dubois',
      inspecteurRole: 'Expert certifié',
      inspecteurAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg',
      defauts: 0,
      defautsLabel: 'Aucun défaut',
      defautsClass: 'green',
      photos: 18,
      document: 'PDF (2.4 MB)',
      documentDisponible: true
    },
    {
      id: 2,
      date: '12 Nov 2024',
      type: 'periodique',
      typeLabel: 'État périodique',
      statut: 'en-cours',
      statutLabel: 'En cours',
      inspecteur: 'L. Martin',
      inspecteurRole: 'Expert certifié',
      inspecteurAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg',
      defauts: 2,
      defautsLabel: '2 défauts mineurs',
      defautsClass: 'yellow',
      photos: 22,
      document: 'En cours de génération',
      documentDisponible: false
    },
    {
      id: 3,
      date: '15 Sept 2024',
      type: 'periodique',
      typeLabel: 'État périodique',
      statut: 'termine',
      statutLabel: 'Terminé',
      inspecteur: 'S. Garcia',
      inspecteurRole: 'Expert certifié',
      inspecteurAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg',
      defauts: 1,
      defautsLabel: '1 défaut moyen',
      defautsClass: 'orange',
      photos: 16,
      document: 'PDF (1.8 MB)',
      documentDisponible: true
    },
    {
      id: 4,
      date: '15 Juin 2024',
      type: 'periodique',
      typeLabel: 'État périodique',
      statut: 'termine',
      statutLabel: 'Terminé',
      inspecteur: 'A. Bernard',
      inspecteurRole: 'Expert certifié',
      inspecteurAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg',
      defauts: 3,
      defautsLabel: '3 défauts critiques',
      defautsClass: 'red',
      photos: 25,
      document: 'PDF (3.2 MB)',
      documentDisponible: true
    },
    {
      id: 5,
      date: '15 Mars 2024',
      type: 'periodique',
      typeLabel: 'État périodique',
      statut: 'termine',
      statutLabel: 'Terminé',
      inspecteur: 'T. Rousseau',
      inspecteurRole: 'Expert certifié',
      inspecteurAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg',
      defauts: 0,
      defautsLabel: 'Aucun défaut',
      defautsClass: 'green',
      photos: 14,
      document: 'PDF (1.6 MB)',
      documentDisponible: true
    },
    {
      id: 6,
      date: '15 Déc 2023',
      type: 'periodique',
      typeLabel: 'État périodique',
      statut: 'termine',
      statutLabel: 'Terminé',
      inspecteur: 'C. Moreau',
      inspecteurRole: 'Expert certifié',
      inspecteurAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg',
      defauts: 2,
      defautsLabel: '2 défauts mineurs',
      defautsClass: 'yellow',
      photos: 19,
      document: 'PDF (2.1 MB)',
      documentDisponible: true
    },
    {
      id: 7,
      date: '15 Sept 2023',
      type: 'periodique',
      typeLabel: 'État périodique',
      statut: 'termine',
      statutLabel: 'Terminé',
      inspecteur: 'E. Petit',
      inspecteurRole: 'Expert certifié',
      inspecteurAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-9.jpg',
      defauts: 4,
      defautsLabel: '4 défauts critiques',
      defautsClass: 'red',
      photos: 21,
      document: 'PDF (2.8 MB)',
      documentDisponible: true
    },
    {
      id: 8,
      date: '20 Déc 2024',
      type: 'sortie',
      typeLabel: 'État de sortie',
      statut: 'planifie',
      statutLabel: 'Planifié',
      inspecteur: 'M. Dupont',
      inspecteurRole: 'Expert certifié',
      inspecteurAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg',
      defauts: 0,
      defautsLabel: 'Non évalué',
      defautsClass: 'gray',
      photos: 0,
      document: 'Non généré',
      documentDisponible: false
    }
  ];

  // Statistiques
  stats = {
    total: 8,
    termines: 6,
    enCours: 1,
    planifies: 1,
    defautsSignales: 12,
    documents: 24
  };

  // Informations du logement
  logement = {
    nom: 'Appartement Parisien',
    adresse: '75 Avenue des Champs-Élysées, 75008 Paris',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/d13f0792a2-5d565ed238986e519c57.png',
    surface: '85 m²',
    pieces: '3 pièces',
    etage: '4ème',
    loyer: '2,450€',
    bailDepuis: 'Mars 2023'
  };

  // Filtres
  filters = {
    search: '',
    type: '',
    status: '',
    year: '',
    sort: 'date-desc'
  };

  // Vue actuelle
  currentView = 'list';

  // Résumé des défauts
  defautsSummary = {
    critiques: { count: 7, items: [
      { nom: 'Fuite d\'eau', count: 3 },
      { nom: 'Peinture écaillée', count: 2 },
      { nom: 'Carrelage fissuré', count: 2 }
    ]},
    moyens: { count: 3, items: [
      { nom: 'Rayures parquet', count: 2 },
      { nom: 'Poignée défaillante', count: 1 }
    ]},
    mineurs: { count: 4, items: [
      { nom: 'Traces sur mur', count: 2 },
      { nom: 'Ampoule grillée', count: 2 }
    ]}
  };

  // Chronologie
  timeline = [
    {
      date: '15 Mars 2023',
      type: 'entree',
      title: 'Entrée dans le logement',
      description: 'État d\'entrée réalisé - Aucun défaut constaté',
      color: 'blue'
    },
    {
      date: '15 Sept 2023',
      type: 'periodique',
      title: 'Inspection périodique',
      description: '4 défauts critiques identifiés - Réparations effectuées',
      color: 'purple'
    },
    {
      date: '15 Déc 2023',
      type: 'periodique',
      title: 'Inspection périodique',
      description: '2 défauts mineurs identifiés - Réparations terminées',
      color: 'purple'
    },
    {
      date: '15 Mars 2024',
      type: 'periodique',
      title: 'Inspection périodique',
      description: 'Aucun défaut constaté - Logement en excellent état',
      color: 'purple'
    },
    {
      date: '15 Juin 2024',
      type: 'periodique',
      title: 'Inspection périodique',
      description: '3 défauts critiques identifiés - Réparations en cours',
      color: 'purple'
    },
    {
      date: '15 Sept 2024',
      type: 'periodique',
      title: 'Inspection périodique',
      description: '1 défaut moyen identifié - Réparation programmée',
      color: 'purple'
    },
    {
      date: '12 Nov 2024',
      type: 'en-cours',
      title: 'Inspection en cours',
      description: 'Inspection périodique en cours - Résultats en attente',
      color: 'yellow'
    },
    {
      date: '20 Déc 2024',
      type: 'sortie',
      title: 'Sortie prévue',
      description: 'État de sortie planifié - Inspection finale du logement',
      color: 'red'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // Méthodes pour les filtres
  onSearchChange(value: string): void {
    this.filters.search = value;
    this.applyFilters();
  }

  onTypeChange(value: string): void {
    this.filters.type = value;
    this.applyFilters();
  }

  onStatusChange(value: string): void {
    this.filters.status = value;
    this.applyFilters();
  }

  onYearChange(value: string): void {
    this.filters.year = value;
    this.applyFilters();
  }

  onSortChange(value: string): void {
    this.filters.sort = value;
    this.applySorting();
  }

  resetFilters(): void {
    this.filters = {
      search: '',
      type: '',
      status: '',
      year: '',
      sort: 'date-desc'
    };
    this.applyFilters();
  }

  applyFilters(): void {
    // Logique de filtrage sera implémentée ici
    console.log('Applying filters:', this.filters);
  }

  applySorting(): void {
    // Logique de tri sera implémentée ici
    console.log('Applying sorting:', this.filters.sort);
  }

  // Méthodes pour les actions
  toggleView(view: string): void {
    this.currentView = view;
  }

  consulterEtat(etat: any): void {
    console.log('Consulter état:', etat);
  }

  telechargerDocument(etat: any): void {
    console.log('Télécharger document:', etat);
  }

  partagerDocument(etat: any): void {
    console.log('Partager document:', etat);
  }

  planifierVisite(): void {
    console.log('Planifier visite');
  }

  telechargerTout(): void {
    console.log('Télécharger tout');
  }

  // Méthodes utilitaires
  getTypeClass(type: string): string {
    switch (type) {
      case 'entree': return 'bg-blue-100 text-blue-800';
      case 'sortie': return 'bg-red-100 text-red-800';
      case 'periodique': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'termine': return 'bg-green-100 text-green-800';
      case 'en-cours': return 'bg-yellow-100 text-yellow-800';
      case 'planifie': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  getDefautsClass(defautsClass: string): string {
    switch (defautsClass) {
      case 'green': return 'bg-green-100 text-green-800';
      case 'yellow': return 'bg-yellow-100 text-yellow-800';
      case 'orange': return 'bg-orange-100 text-orange-800';
      case 'red': return 'bg-red-100 text-red-800';
      case 'gray': return 'bg-gray-100 text-gray-600';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  getTimelineColorClass(color: string): string {
    switch (color) {
      case 'blue': return 'bg-blue-500';
      case 'purple': return 'bg-purple-500';
      case 'yellow': return 'bg-yellow-500';
      case 'red': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  }

  getTimelineBgClass(color: string): string {
    switch (color) {
      case 'blue': return 'bg-blue-50 border-blue-200';
      case 'purple': return 'bg-purple-50 border-purple-200';
      case 'yellow': return 'bg-yellow-50 border-yellow-200';
      case 'red': return 'bg-red-50 border-red-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  }

  getTimelineTextClass(color: string): string {
    switch (color) {
      case 'blue': return 'text-blue-800';
      case 'purple': return 'text-purple-800';
      case 'yellow': return 'text-yellow-800';
      case 'red': return 'text-red-800';
      default: return 'text-gray-800';
    }
  }

  getTimelineDateClass(color: string): string {
    switch (color) {
      case 'blue': return 'text-blue-600';
      case 'purple': return 'text-purple-600';
      case 'yellow': return 'text-yellow-600';
      case 'red': return 'text-red-600';
      default: return 'text-gray-600';
    }
  }

  getTimelineDescClass(color: string): string {
    switch (color) {
      case 'blue': return 'text-blue-700';
      case 'purple': return 'text-purple-700';
      case 'yellow': return 'text-yellow-700';
      case 'red': return 'text-red-700';
      default: return 'text-gray-700';
    }
  }
}
