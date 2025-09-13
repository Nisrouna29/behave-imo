import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SharedHeaderComponent } from '../../../shared/header/shared-header.component';
import { PropertyDetail } from './property-detail.interface';

@Component({
  selector: 'app-property-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedHeaderComponent],
  templateUrl: './property-detail.component.html',
  styleUrl: './property-detail.component.css'
})
export class PropertyDetailComponent implements OnInit {
  activeRoute = '/proprietes';
  propertyId: number = 0;

  // Using signals for reactive state management
  property = signal<PropertyDetail | null>(null);
  isLoading = signal<boolean>(true);
  isFavorite = signal<boolean>(false);
  currentMainImage = signal<string>('');

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.propertyId = +params['id'];
      this.loadPropertyDetail();
    });
  }

  loadPropertyDetail() {
    this.isLoading.set(true);

    // Simulate API call - replace with actual service call
    setTimeout(() => {
      const mockProperty: PropertyDetail = {
        id: this.propertyId,
        title: 'Villa contemporaine',
        address: '15 Avenue des Tilleuls, Neuilly-sur-Seine, 92200',
        price: '1 250 000€',
        status: 'À vendre',
        bedrooms: 4,
        bathrooms: 3,
        area: 250,
        landArea: 500,
        yearBuilt: 2020,
        floor: 'R+1',
        heating: 'Gaz',
        garage: '2 places',
        pool: true,
        energyClass: 'B',
        description: 'Magnifique villa contemporaine située dans un quartier résidentiel prisé de Neuilly-sur-Seine. Cette propriété d\'exception offre des espaces de vie généreux et lumineux, avec une architecture moderne et des finitions haut de gamme. La villa dispose d\'un salon-séjour de 60m², d\'une cuisine équipée ouverte, de 4 chambres dont une suite parentale avec dressing et salle de bain privative. L\'extérieur comprend un jardin paysager de 500m² avec terrasse et piscine.',
        features: [
          'Surface habitable: 250 m²',
          'Surface terrain: 500 m²',
          'Année de construction: 2020',
          'Étage: R+1',
          'Chauffage: Gaz',
          'Garage: 2 places',
          'Piscine: Oui',
          'Classe énergétique: B'
        ],
        images: [
          'https://storage.googleapis.com/uxpilot-auth.appspot.com/a8f78d7684-595d29c02a9a3e8b87e5.png',
          'https://storage.googleapis.com/uxpilot-auth.appspot.com/c905363a02-2c42e503f0f6126c693f.png',
          'https://storage.googleapis.com/uxpilot-auth.appspot.com/089f9e5a5b-b37ebab7b79ce4d7a45a.png',
          'https://storage.googleapis.com/uxpilot-auth.appspot.com/a385111b54-775037bb81d604372acc.png',
          'https://storage.googleapis.com/uxpilot-auth.appspot.com/b004fe88b8-4e6e113b67b4eaf464dc.png',
          'https://storage.googleapis.com/uxpilot-auth.appspot.com/d911c9430e-39ad743a1a3136769596.png',
          'https://storage.googleapis.com/uxpilot-auth.appspot.com/9e719dd6eb-b4ea7d61e6a0ab2f5078.png'
        ],
        agent: {
          name: 'Marie Dubois',
          title: 'Conseillère senior',
          avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg'
        },
        location: {
          transport: ['RER A - 5 min à pied'],
          schools: ['École primaire - 3 min'],
          shops: ['Commerces - 2 min']
        }
      };

      this.property.set(mockProperty);
      this.currentMainImage.set(mockProperty.images[0]);
      this.isLoading.set(false);
    }, 1000);
  }

  onImageClick(imageUrl: string) {
    this.currentMainImage.set(imageUrl);
  }

  onToggleFavorite() {
    this.isFavorite.set(!this.isFavorite());
  }

  onContactAgent() {
    console.log('Deposit dossier');
    // Navigate to dossier page
    this.router.navigate(['/dossier-location', this.propertyId]);
  }

  onScheduleVisit() {
    console.log('Schedule visit');
    // Implement visit scheduling
  }

  onBackToProperties() {
    this.router.navigate(['/proprietes']);
  }
}
