import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedHeaderComponent } from '../../shared/header/shared-header.component';
import { PropertyHeaderComponent } from './components/property-header/property-header.component';
import { PropertyFiltersComponent, FilterData } from './components/property-filters/property-filters.component';
import { PropertyGridComponent } from './components/property-grid/property-grid.component';
import { Property } from './components/property-card/property-card.component';
import { FooterComponent } from '../../acceuil/footer/footer.component';

@Component({
  selector: 'app-proprietes',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SharedHeaderComponent,
    PropertyHeaderComponent,
    PropertyFiltersComponent,
    PropertyGridComponent,
    FooterComponent
  ],
  templateUrl: './proprietes.component.html',
  styleUrl: './proprietes.component.css'
})
export class ProprietesComponent {
  activeRoute = '/proprietes';

  // Using signals for reactive state management
  properties = signal<Property[]>([
    {
      id: 1,
      title: 'Villa contemporaine',
      location: 'Neuilly-sur-Seine, 92200',
      bedrooms: 4,
      bathrooms: 3,
      area: 250,
      price: '1 250 000€',
      status: 'À vendre',
      type: 'Villa',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/d71c4ba01d-3afe46605cc40756db47.png',
      isFavorite: false
    },
    {
      id: 2,
      title: 'Appartement de luxe',
      location: '16ème arrondissement, Paris',
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      price: '4 500€/mois',
      status: 'À louer',
      type: 'Appartement',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/47a38b50cd-40cec744017728117d32.png',
      isFavorite: false
    },
    {
      id: 3,
      title: 'Maison familiale',
      location: 'Boulogne-Billancourt, 92100',
      bedrooms: 5,
      bathrooms: 3,
      area: 180,
      price: '890 000€',
      status: 'À vendre',
      type: 'Maison',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/7705666ac4-13ec8dbf996e88733ce9.png',
      isFavorite: true
    },
    {
      id: 4,
      title: 'Penthouse avec terrasse',
      location: 'Levallois-Perret, 92300',
      bedrooms: 4,
      bathrooms: 3,
      area: 200,
      price: '1 450 000€',
      status: 'À vendre',
      type: 'Appartement',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/c9afad15c9-52a524116bad8ca572cd.png',
      isFavorite: false
    },
    {
      id: 5,
      title: 'Studio moderne',
      location: '11ème arrondissement, Paris',
      bedrooms: 1,
      bathrooms: 1,
      area: 35,
      price: '1 200€/mois',
      status: 'À louer',
      type: 'Studio',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/e4bc8db75e-77dd4e217bef47b05b85.png',
      isFavorite: false
    },
    {
      id: 6,
      title: 'Duplex moderne',
      location: 'Courbevoie, 92400',
      bedrooms: 3,
      bathrooms: 2,
      area: 150,
      price: '950 000€',
      status: 'À vendre',
      type: 'Duplex',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/289d59d139-da39286f2e8d556fd0d0.png',
      isFavorite: false
    },
    {
      id: 7,
      title: 'Appartement Haussmannien',
      location: '7ème arrondissement, Paris',
      bedrooms: 4,
      bathrooms: 2,
      area: 140,
      price: '2 200 000€',
      status: 'À vendre',
      type: 'Appartement',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/d71c4ba01d-3afe46605cc40756db47.png',
      isFavorite: true
    },
    {
      id: 8,
      title: 'Loft industriel',
      location: '19ème arrondissement, Paris',
      bedrooms: 2,
      bathrooms: 1,
      area: 85,
      price: '2 800€/mois',
      status: 'À louer',
      type: 'Loft',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/47a38b50cd-40cec744017728117d32.png',
      isFavorite: false
    },
    {
      id: 9,
      title: 'Villa de prestige',
      location: 'Saint-Cloud, 92210',
      bedrooms: 6,
      bathrooms: 4,
      area: 350,
      price: '3 500 000€',
      status: 'À vendre',
      type: 'Villa',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/7705666ac4-13ec8dbf996e88733ce9.png',
      isFavorite: false
    },
    {
      id: 10,
      title: 'T3 moderne',
      location: 'Issy-les-Moulineaux, 92130',
      bedrooms: 3,
      bathrooms: 2,
      area: 75,
      price: '1 800€/mois',
      status: 'À louer',
      type: 'Appartement',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/c9afad15c9-52a524116bad8ca572cd.png',
      isFavorite: true
    },
    {
      id: 11,
      title: 'Maison de ville',
      location: 'Asnières-sur-Seine, 92600',
      bedrooms: 4,
      bathrooms: 3,
      area: 120,
      price: '750 000€',
      status: 'À vendre',
      type: 'Maison',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/e4bc8db75e-77dd4e217bef47b05b85.png',
      isFavorite: false
    },
    {
      id: 12,
      title: 'Penthouse avec vue',
      location: '15ème arrondissement, Paris',
      bedrooms: 5,
      bathrooms: 3,
      area: 180,
      price: '3 200 000€',
      status: 'À vendre',
      type: 'Appartement',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/289d59d139-da39286f2e8d556fd0d0.png',
      isFavorite: false
    }
  ]);

  // Filter signals
  filteredProperties = signal<Property[]>([]);
  totalProperties = signal<number>(0);
  viewMode = signal<'grid' | 'list'>('grid');
  currentPage = signal<number>(1);
  itemsPerPage = signal<number>(4);

  constructor() {
    // Initialize filtered properties
    this.updateFilteredProperties();
  }

  // Method to update filtered properties
  updateFilteredProperties() {
    const allProperties = this.properties();
    this.filteredProperties.set(allProperties);
    this.totalProperties.set(allProperties.length);
  }

  onFilterChange(filterData: FilterData) {
    const allProperties = this.properties();

    const filtered = allProperties.filter(property => {
      const matchesTransaction = filterData.transaction === 'Type de transaction' ||
        (filterData.transaction === 'Acheter' && property.status === 'À vendre') ||
        (filterData.transaction === 'Louer' && property.status === 'À louer');

      const matchesType = filterData.type === 'Type de bien' || property.type === filterData.type;
      const matchesLocation = filterData.location === '' || property.location.toLowerCase().includes(filterData.location.toLowerCase());

      let matchesBedrooms = true;
      if (filterData.bedrooms !== 'Chambres') {
        const requiredBedrooms = parseInt(filterData.bedrooms.replace('+', ''));
        matchesBedrooms = property.bedrooms >= requiredBedrooms;
      }

      return matchesTransaction && matchesType && matchesLocation && matchesBedrooms;
    });

    this.filteredProperties.set(filtered);
    this.totalProperties.set(filtered.length);
    // Reset to first page when filtering
    this.currentPage.set(1);
  }

  onToggleFavorite(propertyId: number) {
    const properties = this.properties();
    const updatedProperties = properties.map(property =>
      property.id === propertyId
        ? { ...property, isFavorite: !property.isFavorite }
        : property
    );
    this.properties.set(updatedProperties);
    this.updateFilteredProperties();
  }

  onViewDetails(propertyId: number) {
    console.log('View details for property:', propertyId);
    // Implement navigation to property details page
  }

  onToggleViewMode() {
    this.viewMode.set(this.viewMode() === 'grid' ? 'list' : 'grid');
  }

  onSearch() {
    // Implement search functionality
    console.log('Search triggered');
  }

  onPageChange(page: number) {
    this.currentPage.set(page);
  }
}
