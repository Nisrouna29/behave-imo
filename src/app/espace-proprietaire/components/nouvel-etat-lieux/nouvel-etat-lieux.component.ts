import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Room {
  id: number;
  name: string;
  type: string;
  state: {
    walls?: string;
    floor?: string;
    ceiling?: string;
    lighting?: string;
  };
  defects: Defect[];
  photos: Photo[];
  inspected: boolean;
  inProgress: boolean;
  observations: string;
}

interface Defect {
  id: number;
  title: string;
  description: string;
  severity: 'urgent' | 'moyen' | 'mineur';
  category: 'plomberie' | 'electricite' | 'peinture' | 'carrelage' | 'parquet' | 'autres';
  location: string;
  room: string;
  date: string;
  photos: Photo[];
  status: 'signale' | 'en-cours' | 'repare' | 'ignore';
  estimatedCost?: number;
  repairDate?: string;
  inspector: string;
}

interface Photo {
  id: number;
  url: string;
  caption: string;
  type: 'general' | 'defect' | 'wear';
  room: string;
  date: string;
  inspector: string;
}

interface InspectionHistory {
  id: number;
  date: string;
  type: 'entree' | 'sortie' | 'periodique';
  inspector: string;
  status: 'termine' | 'en-cours' | 'planifie';
  defectsCount: number;
  photosCount: number;
  notes: string;
}

interface DefectCategory {
  name: string;
  count: number;
  defects: Defect[];
}

@Component({
  selector: 'app-nouvel-etat-lieux',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nouvel-etat-lieux.component.html',
  styleUrl: './nouvel-etat-lieux.component.css'
})
export class NouvelEtatLieuxComponent implements OnInit {
  rooms: Room[] = [];
  currentRoomIndex = -1;
  selectedProperty = '';
  inspectionType = 'entree';
  showAddRoomForm = false;
  newRoomName = '';
  newRoomType = '';
  activeTab = 'general';
  currentDate = new Date().toLocaleDateString('fr-FR');
  
  // Nouvelles propriétés pour l'inspection avancée
  inspectionHistory: InspectionHistory[] = [];
  defectCategories: DefectCategory[] = [];
  showDefectForm = false;
  newDefect: Partial<Defect> = {};
  showTimeline = false;
  showStatistics = false;
  
  // Données d'exemple pour les statistiques
  totalInspections = 8;
  completedInspections = 6;
  ongoingInspections = 1;
  plannedInspections = 1;
  totalDefects = 12;
  totalPhotos = 24;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData(): void {
    console.log('Nouvel état des lieux component initialized');
    this.initializeRooms();
    this.initializeInspectionHistory();
    this.initializeDefectCategories();
  }

  private initializeRooms(): void {
    this.rooms = [
      {
        id: 1,
        name: 'Salon',
        type: 'living',
        inspected: true,
        inProgress: false,
        observations: 'Salon en excellent état général. Peinture récente, parquet en bon état. Éclairage naturel optimal grâce aux grandes baies vitrées. Quelques traces d\'usure normale sur les plinthes.',
        state: {
          walls: 'excellent',
          floor: 'bon',
          ceiling: 'excellent',
          lighting: 'bon'
        },
        defects: [
          {
            id: 1,
            title: 'Fissure dans le mur',
            description: 'Fissure verticale de 15cm environ sur le mur nord, près de la fenêtre. Nécessite une intervention rapide.',
            severity: 'urgent',
            category: 'peinture',
            location: 'Mur nord',
            room: 'Salon',
            date: '15 nov 2024',
            photos: [],
            status: 'signale',
            inspector: 'M. Dubois'
          },
          {
            id: 2,
            title: 'Usure des plinthes',
            description: 'Traces d\'usure et petites éraflures sur les plinthes côté entrée. État acceptable mais à surveiller.',
            severity: 'moyen',
            category: 'parquet',
            location: 'Côté entrée',
            room: 'Salon',
            date: '15 nov 2024',
            photos: [],
            status: 'signale',
            inspector: 'M. Dubois'
          }
        ],
        photos: [
          {
            id: 1,
            url: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/fca16074ad-b2ee0681ff949b3eca21.png',
            caption: 'Vue générale',
            type: 'general',
            room: 'Salon',
            date: '15 nov 2024',
            inspector: 'M. Dubois'
          },
          {
            id: 2,
            url: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/d8574349c4-1db18ffee9c5039a70f8.png',
            caption: 'Défaut',
            type: 'defect',
            room: 'Salon',
            date: '15 nov 2024',
            inspector: 'M. Dubois'
          },
          {
            id: 3,
            url: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/9839945517-4017f3b82e7497d4a776.png',
            caption: 'Usure',
            type: 'wear',
            room: 'Salon',
            date: '15 nov 2024',
            inspector: 'M. Dubois'
          }
        ]
      },
      {
        id: 2,
        name: 'Cuisine',
        type: 'kitchen',
        inspected: true,
        inProgress: false,
        observations: '',
        state: {
          walls: 'bon',
          floor: 'excellent',
          ceiling: 'bon',
          lighting: 'excellent'
        },
        defects: [],
        photos: []
      },
      {
        id: 3,
        name: 'Chambre principale',
        type: 'bedroom',
        inspected: true,
        inProgress: false,
        observations: '',
        state: {
          walls: 'excellent',
          floor: 'bon',
          ceiling: 'excellent',
          lighting: 'bon'
        },
        defects: [],
        photos: []
      },
      {
        id: 4,
        name: 'Chambre 2',
        type: 'bedroom',
        inspected: false,
        inProgress: true,
        observations: '',
        state: {
          walls: 'moyen',
          floor: 'bon',
          ceiling: 'bon',
          lighting: 'moyen'
        },
        defects: [],
        photos: []
      },
      {
        id: 5,
        name: 'Chambre 3',
        type: 'bedroom',
        inspected: false,
        inProgress: false,
        observations: '',
        state: {
          walls: 'mauvais',
          floor: 'moyen',
          ceiling: 'moyen',
          lighting: 'mauvais'
        },
        defects: [],
        photos: []
      },
      {
        id: 6,
        name: 'Salle de bain',
        type: 'bathroom',
        inspected: false,
        inProgress: false,
        observations: '',
        state: {
          walls: 'moyen',
          floor: 'bon',
          ceiling: 'bon',
          lighting: 'moyen'
        },
        defects: [],
        photos: []
      },
      {
        id: 7,
        name: 'Garage',
        type: 'garage',
        inspected: false,
        inProgress: false,
        observations: '',
        state: {
          walls: 'mauvais',
          floor: 'mauvais',
          ceiling: 'moyen',
          lighting: 'mauvais'
        },
        defects: [],
        photos: []
      }
    ];
  }

  private initializeInspectionHistory(): void {
    this.inspectionHistory = [
      {
        id: 1,
        date: '15 Mars 2023',
        type: 'entree',
        inspector: 'M. Dubois',
        status: 'termine',
        defectsCount: 0,
        photosCount: 18,
        notes: 'État d\'entrée réalisé - Aucun défaut constaté'
      },
      {
        id: 2,
        date: '15 Sept 2023',
        type: 'periodique',
        inspector: 'E. Petit',
        status: 'termine',
        defectsCount: 4,
        photosCount: 21,
        notes: '4 défauts critiques identifiés - Réparations effectuées'
      },
      {
        id: 3,
        date: '15 Déc 2023',
        type: 'periodique',
        inspector: 'C. Moreau',
        status: 'termine',
        defectsCount: 2,
        photosCount: 19,
        notes: '2 défauts mineurs identifiés - Réparations terminées'
      },
      {
        id: 4,
        date: '15 Mars 2024',
        type: 'periodique',
        inspector: 'T. Rousseau',
        status: 'termine',
        defectsCount: 0,
        photosCount: 14,
        notes: 'Aucun défaut constaté - Logement en excellent état'
      },
      {
        id: 5,
        date: '15 Juin 2024',
        type: 'periodique',
        inspector: 'A. Bernard',
        status: 'termine',
        defectsCount: 3,
        photosCount: 25,
        notes: '3 défauts critiques identifiés - Réparations en cours'
      },
      {
        id: 6,
        date: '15 Sept 2024',
        type: 'periodique',
        inspector: 'S. Garcia',
        status: 'termine',
        defectsCount: 1,
        photosCount: 16,
        notes: '1 défaut moyen identifié - Réparation programmée'
      },
      {
        id: 7,
        date: '12 Nov 2024',
        type: 'periodique',
        inspector: 'L. Martin',
        status: 'en-cours',
        defectsCount: 2,
        photosCount: 22,
        notes: 'Inspection périodique en cours - Résultats en attente'
      },
      {
        id: 8,
        date: '20 Déc 2024',
        type: 'sortie',
        inspector: 'M. Dupont',
        status: 'planifie',
        defectsCount: 0,
        photosCount: 0,
        notes: 'État de sortie planifié - Inspection finale du logement'
      }
    ];
  }

  private initializeDefectCategories(): void {
    this.defectCategories = [
      {
        name: 'Plomberie',
        count: 3,
        defects: [
          {
            id: 1,
            title: 'Fuite d\'eau',
            description: 'Fuite au niveau du robinet de la cuisine',
            severity: 'urgent',
            category: 'plomberie',
            location: 'Cuisine',
            room: 'Cuisine',
            date: '15 Juin 2024',
            photos: [],
            status: 'repare',
            estimatedCost: 150,
            repairDate: '20 Juin 2024',
            inspector: 'A. Bernard'
          }
        ]
      },
      {
        name: 'Peinture',
        count: 2,
        defects: [
          {
            id: 2,
            title: 'Peinture écaillée',
            description: 'Écaillage de la peinture sur le mur nord',
            severity: 'urgent',
            category: 'peinture',
            location: 'Mur nord',
            room: 'Salon',
            date: '15 Juin 2024',
            photos: [],
            status: 'en-cours',
            estimatedCost: 200,
            inspector: 'A. Bernard'
          }
        ]
      },
      {
        name: 'Carrelage',
        count: 2,
        defects: [
          {
            id: 3,
            title: 'Carrelage fissuré',
            description: 'Fissure dans le carrelage de la salle de bain',
            severity: 'urgent',
            category: 'carrelage',
            location: 'Salle de bain',
            room: 'Salle de bain',
            date: '15 Juin 2024',
            photos: [],
            status: 'signale',
            estimatedCost: 300,
            inspector: 'A. Bernard'
          }
        ]
      },
      {
        name: 'Parquet',
        count: 2,
        defects: [
          {
            id: 4,
            title: 'Rayures parquet',
            description: 'Rayures superficielles sur le parquet du salon',
            severity: 'moyen',
            category: 'parquet',
            location: 'Salon',
            room: 'Salon',
            date: '15 Sept 2024',
            photos: [],
            status: 'signale',
            estimatedCost: 100,
            inspector: 'S. Garcia'
          }
        ]
      },
      {
        name: 'Électricité',
        count: 1,
        defects: [
          {
            id: 5,
            title: 'Poignée défaillante',
            description: 'Poignée de porte qui se desserre',
            severity: 'moyen',
            category: 'autres',
            location: 'Entrée',
            room: 'Entrée',
            date: '15 Sept 2024',
            photos: [],
            status: 'signale',
            estimatedCost: 50,
            inspector: 'S. Garcia'
          }
        ]
      },
      {
        name: 'Autres',
        count: 2,
        defects: [
          {
            id: 6,
            title: 'Traces sur mur',
            description: 'Traces d\'usure sur les murs',
            severity: 'mineur',
            category: 'autres',
            location: 'Chambre',
            room: 'Chambre',
            date: '15 Déc 2023',
            photos: [],
            status: 'repare',
            estimatedCost: 80,
            repairDate: '20 Déc 2023',
            inspector: 'C. Moreau'
          }
        ]
      }
    ];
  }

  // Méthodes pour la sélection de propriété
  onPropertyChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedProperty = value;
    console.log('Property selected:', value);
  }

  onInspectionTypeChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.inspectionType = value;
    console.log('Inspection type changed:', value);
  }

  // Méthodes pour la gestion des pièces
  onAddRoom(): void {
    this.showAddRoomForm = true;
  }

  onConfirmAddRoom(): void {
    if (this.newRoomName.trim() && this.newRoomType) {
      const room: Room = {
        id: Date.now(),
        name: this.newRoomName.trim(),
        type: this.newRoomType,
        state: {},
        defects: [],
        photos: [],
        inspected: false,
        inProgress: false,
        observations: ''
      };
      
      this.rooms.push(room);
      this.showAddRoomForm = false;
      this.newRoomName = '';
      this.newRoomType = '';
      this.updateRoomSelector();
    }
  }

  onCancelAddRoom(): void {
    this.showAddRoomForm = false;
    this.newRoomName = '';
    this.newRoomType = '';
  }

  onSelectRoom(index: number): void {
    this.currentRoomIndex = index;
    console.log('Room selected:', this.rooms[index].name);
  }

  onRoomSelectorChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    const index = parseInt(value);
    if (!isNaN(index)) {
      this.onSelectRoom(index);
    }
  }

  onDeleteRoom(index: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette pièce ?')) {
      this.rooms.splice(index, 1);
      if (this.currentRoomIndex === index) {
        this.currentRoomIndex = -1;
      } else if (this.currentRoomIndex > index) {
        this.currentRoomIndex--;
      }
      this.updateRoomSelector();
    }
  }

  private updateRoomSelector(): void {
    // Cette méthode sera utilisée pour mettre à jour le sélecteur de pièces
    console.log('Room selector updated');
  }

  // Méthodes pour les onglets d'inspection
  onTabChange(tab: string): void {
    this.activeTab = tab;
    console.log('Tab changed to:', tab);
  }

  // Méthodes pour l'état général
  onStateChange(element: string, state: string): void {
    if (this.currentRoomIndex >= 0) {
      this.rooms[this.currentRoomIndex].state[element as keyof Room['state']] = state;
      console.log(`${element} state changed to:`, state);
    }
  }

  // Méthodes pour les défauts
  onAddDefect(): void {
    this.showDefectForm = true;
    this.newDefect = {
      id: Date.now(),
      title: '',
      description: '',
      severity: 'mineur',
      category: 'autres',
      location: '',
      room: this.currentRoomIndex >= 0 ? this.rooms[this.currentRoomIndex].name : '',
      date: new Date().toLocaleDateString('fr-FR'),
      photos: [],
      status: 'signale',
      inspector: 'Inspecteur actuel'
    };
  }

  onConfirmAddDefect(): void {
    if (this.newDefect.title && this.newDefect.description) {
      const defect: Defect = {
        id: this.newDefect.id!,
        title: this.newDefect.title!,
        description: this.newDefect.description!,
        severity: this.newDefect.severity!,
        category: this.newDefect.category!,
        location: this.newDefect.location!,
        room: this.newDefect.room!,
        date: this.newDefect.date!,
        photos: this.newDefect.photos!,
        status: this.newDefect.status!,
        inspector: this.newDefect.inspector!
      };
      
      if (this.currentRoomIndex >= 0) {
        this.rooms[this.currentRoomIndex].defects.push(defect);
      }
      
      this.showDefectForm = false;
      this.newDefect = {};
    }
  }

  onCancelAddDefect(): void {
    this.showDefectForm = false;
    this.newDefect = {};
  }

  onEditDefect(defectId: number): void {
    console.log('Edit defect:', defectId);
    // Logique pour éditer un défaut
  }

  onDeleteDefect(defectId: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce défaut ?')) {
      if (this.currentRoomIndex >= 0) {
        const room = this.rooms[this.currentRoomIndex];
        room.defects = room.defects.filter(d => d.id !== defectId);
      }
    }
  }

  onUpdateDefectStatus(defectId: number, status: Defect['status']): void {
    if (this.currentRoomIndex >= 0) {
      const room = this.rooms[this.currentRoomIndex];
      const defect = room.defects.find(d => d.id === defectId);
      if (defect) {
        defect.status = status;
        if (status === 'repare') {
          defect.repairDate = new Date().toLocaleDateString('fr-FR');
        }
      }
    }
  }

  // Méthodes pour les photos
  onAddPhoto(): void {
    console.log('Add photo clicked');
    // Logique pour ajouter une photo
  }

  onViewPhoto(photoId: number): void {
    console.log('View photo:', photoId);
  }

  onDeletePhoto(photoId: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette photo ?')) {
      if (this.currentRoomIndex >= 0) {
        const room = this.rooms[this.currentRoomIndex];
        room.photos = room.photos.filter(p => p.id !== photoId);
      }
    }
  }

  // Méthodes pour les modèles
  onLoadTemplate(templateType: string): void {
    console.log('Load template:', templateType);
    let templateRooms: { name: string; type: string }[] = [];
    
    switch(templateType) {
      case 'Appartement 2P':
        templateRooms = [
          { name: 'Salon/Cuisine', type: 'salon' },
          { name: 'Chambre', type: 'chambre' },
          { name: 'Salle de bain', type: 'salle-de-bain' },
          { name: 'Entrée', type: 'entree' }
        ];
        break;
      case 'Appartement 3P':
        templateRooms = [
          { name: 'Salon', type: 'salon' },
          { name: 'Cuisine', type: 'cuisine' },
          { name: 'Chambre 1', type: 'chambre' },
          { name: 'Chambre 2', type: 'chambre' },
          { name: 'Salle de bain', type: 'salle-de-bain' }
        ];
        break;
      case 'Maison T4':
        templateRooms = [
          { name: 'Salon/Séjour', type: 'salon' },
          { name: 'Cuisine', type: 'cuisine' },
          { name: 'Chambre parentale', type: 'chambre' },
          { name: 'Chambre 2', type: 'chambre' },
          { name: 'Chambre 3', type: 'chambre' },
          { name: 'Salle de bain principale', type: 'salle-de-bain' },
          { name: 'Salle de bain 2', type: 'salle-de-bain' },
          { name: 'Garage', type: 'garage' },
          { name: 'Jardin', type: 'jardin' }
        ];
        break;
    }
    
    templateRooms.forEach(room => {
      const newRoom: Room = {
        id: Date.now() + Math.random(),
        name: room.name,
        type: room.type,
        state: {},
        defects: [],
        photos: [],
        inspected: false,
        inProgress: false,
        observations: ''
      };
      this.rooms.push(newRoom);
    });
    
    this.updateRoomSelector();
  }

  // Méthodes pour les actions
  onSaveDraft(): void {
    console.log('Save draft clicked');
    alert('Brouillon enregistré avec succès');
  }

  onFinalize(): void {
    console.log('Finalize clicked');
    alert('État des lieux finalisé avec succès');
  }

  onExport(): void {
    console.log('Export clicked');
  }

  onBackToList(): void {
    this.router.navigate(['/espace-proprietaire/etat-lieux']);
  }

  // Méthodes pour la chronologie et les statistiques
  onToggleTimeline(): void {
    this.showTimeline = !this.showTimeline;
  }

  onToggleStatistics(): void {
    this.showStatistics = !this.showStatistics;
  }

  onViewInspectionDetails(inspectionId: string | number): void {
    console.log('View inspection details:', inspectionId);
    // Logique pour voir les détails d'une inspection
  }

  onDownloadInspectionReport(inspectionId: string | number): void {
    console.log('Download inspection report:', inspectionId);
    alert(`Téléchargement du rapport d'inspection ${inspectionId}`);
  }

  onShareInspectionReport(inspectionId: number): void {
    console.log('Share inspection report:', inspectionId);
    alert(`Partage du rapport d'inspection ${inspectionId}`);
  }

  onScheduleRepair(defectId: number): void {
    console.log('Schedule repair for defect:', defectId);
    alert(`Planification de réparation pour le défaut ${defectId}`);
  }

  onExportAllReports(): void {
    console.log('Export all reports');
    alert('Export de tous les rapports');
  }

  onScheduleVisit(): void {
    console.log('Schedule visit');
    alert('Planification d\'une visite');
  }

  // New methods for detailed inspection section
  onGeneratePDF(): void {
    console.log('Generate PDF clicked');
    alert('Génération du rapport PDF en cours...');
  }

  onShareWithTenant(): void {
    console.log('Share with tenant clicked');
    alert('Partage avec le locataire...');
  }

  onScheduleRepairs(): void {
    console.log('Schedule repairs clicked');
    alert('Planification des réparations...');
  }

  onDuplicateTemplate(): void {
    console.log('Duplicate template clicked');
    alert('Duplication du modèle...');
  }

  getCurrentRoomObservations(): string {
    return this.rooms[this.currentRoomIndex]?.observations || '';
  }

  onObservationsChange(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    if (this.rooms[this.currentRoomIndex]) {
      this.rooms[this.currentRoomIndex].observations = target.value;
    }
  }

  // Getters pour les statistiques
  get inspectedRoomsCount(): number {
    return this.rooms.filter(room => room.inspected).length;
  }

  get totalDefectsCount(): number {
    return this.rooms.reduce((total, room) => total + room.defects.length, 0);
  }

  get totalPhotosCount(): number {
    return this.rooms.reduce((total, room) => total + room.photos.length, 0);
  }

  get progressPercentage(): number {
    return this.rooms.length > 0 ? (this.inspectedRoomsCount / this.rooms.length) * 100 : 0;
  }

  get urgentDefectsCount(): number {
    return this.rooms.reduce((total, room) => 
      total + room.defects.filter(defect => defect.severity === 'urgent').length, 0);
  }

  get mediumDefectsCount(): number {
    return this.defectCategories.reduce((total, category) => 
      total + category.defects.filter(defect => defect.severity === 'moyen').length, 0);
  }

  get minorDefectsCount(): number {
    return this.rooms.reduce((total, room) => 
      total + room.defects.filter(defect => defect.severity === 'mineur').length, 0);
  }

  // Nouveaux getters pour les statistiques avancées
  get criticalDefectsCount(): number {
    return this.defectCategories.reduce((total, category) => 
      total + category.defects.filter(defect => defect.severity === 'urgent').length, 0);
  }

  get minorDefectsCountAdvanced(): number {
    return this.defectCategories.reduce((total, category) => 
      total + category.defects.filter(defect => defect.severity === 'mineur').length, 0);
  }

  get repairedDefectsCount(): number {
    return this.defectCategories.reduce((total, category) => 
      total + category.defects.filter(defect => defect.status === 'repare').length, 0);
  }

  get ongoingDefectsCount(): number {
    return this.defectCategories.reduce((total, category) => 
      total + category.defects.filter(defect => defect.status === 'en-cours').length, 0);
  }

  get reportedDefectsCount(): number {
    return this.defectCategories.reduce((total, category) => 
      total + category.defects.filter(defect => defect.status === 'signale').length, 0);
  }

  get totalEstimatedCost(): number {
    return this.defectCategories.reduce((total, category) => 
      total + category.defects.reduce((catTotal, defect) => 
        catTotal + (defect.estimatedCost || 0), 0), 0);
  }

  get completedInspectionsCount(): number {
    return this.inspectionHistory.filter(inspection => inspection.status === 'termine').length;
  }

  get ongoingInspectionsCount(): number {
    return this.inspectionHistory.filter(inspection => inspection.status === 'en-cours').length;
  }

  get plannedInspectionsCount(): number {
    return this.inspectionHistory.filter(inspection => inspection.status === 'planifie').length;
  }

  // Méthodes pour les statistiques des défauts par catégorie
  getDefectsBySeverity(severity: 'urgent' | 'moyen' | 'mineur'): DefectCategory[] {
    return this.defectCategories.filter(category => 
      category.defects.some(defect => defect.severity === severity)
    );
  }

  getDefectsCountBySeverity(severity: 'urgent' | 'moyen' | 'mineur'): number {
    return this.defectCategories.reduce((total, category) => 
      total + category.defects.filter(defect => defect.severity === severity).length, 0);
  }

  hasDefectsBySeverity(category: DefectCategory, severity: 'urgent' | 'moyen' | 'mineur'): boolean {
    return category.defects.some(defect => defect.severity === severity);
  }

  getDefectsCountBySeverityForCategory(category: DefectCategory, severity: 'urgent' | 'moyen' | 'mineur'): number {
    return category.defects.filter(defect => defect.severity === severity).length;
  }
}
