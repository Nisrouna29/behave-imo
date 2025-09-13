import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Property {
  id: number;
  title: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  price: string;
  status: string;
  image: string;
}

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css'
})
export class PropertiesComponent {
  properties: Property[] = [
    {
      id: 1,
      title: 'Villa contemporaine',
      location: 'Neuilly-sur-Seine, 92200',
      bedrooms: 4,
      bathrooms: 3,
      area: 250,
      price: '1 250 000€',
      status: 'À vendre',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/d71c4ba01d-147689725a784e8aafcd.png'
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
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/47a38b50cd-d333aaa69929c824a336.png'
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
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/7705666ac4-e24321b6692f7a758b91.png'
    }
  ];
}