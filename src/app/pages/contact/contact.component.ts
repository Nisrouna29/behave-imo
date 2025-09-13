import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedHeaderComponent } from '../../shared/header/shared-header.component';
import { FooterComponent } from '../../acceuil/footer/footer.component';

interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  link?: string;
}

interface Office {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, SharedHeaderComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  activeRoute = '/contact';

  // Form data using signals
  formData = signal({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    propertyType: '',
    budget: ''
  });

  isSubmitting = signal(false);
  submitSuccess = signal(false);

  contactInfo = signal<ContactInfo[]>([
    {
      icon: 'fa-solid fa-phone',
      title: 'Téléphone',
      value: '+33 1 23 45 67 89',
      link: 'tel:+33123456789'
    },
    {
      icon: 'fa-solid fa-envelope',
      title: 'Email',
      value: 'contact@immopro.fr',
      link: 'mailto:contact@immopro.fr'
    },
    {
      icon: 'fa-solid fa-map-marker-alt',
      title: 'Adresse',
      value: '123 Avenue des Champs-Élysées, 75008 Paris'
    },
    {
      icon: 'fa-solid fa-clock',
      title: 'Horaires',
      value: 'Lun-Ven: 9h-19h, Sam: 9h-17h'
    }
  ]);

  offices = signal<Office[]>([
    {
      name: 'Siège Principal',
      address: '123 Avenue des Champs-Élysées, 75008 Paris',
      phone: '+33 1 23 45 67 89',
      email: 'contact&#64;immopro.fr',
      hours: 'Lun-Ven: 9h-19h, Sam: 9h-17h'
    }
  ]);

  subjects = signal([
    'Vente immobilière',
    'Achat immobilier',
    'Location',
    'Gestion des dossiers locatifs',
    'Recherche de locataires',
    'Estimation',
    'Autre'
  ]);

  propertyTypes = signal([
    'Appartement',
    'Maison',
    'Villa',
    'Loft',
    'Château',
    'Terrain',
    'Local commercial'
  ]);

  updateFormData(field: string, value: string) {
    this.formData.update(data => ({ ...data, [field]: value }));
  }

  async onSubmit() {
    this.isSubmitting.set(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    this.isSubmitting.set(false);
    this.submitSuccess.set(true);

    // Reset form after success
    setTimeout(() => {
      this.formData.set({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        propertyType: '',
        budget: ''
      });
      this.submitSuccess.set(false);
    }, 3000);
  }
}
