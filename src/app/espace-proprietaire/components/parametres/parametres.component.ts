import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parametres',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './parametres.component.html',
  styleUrl: './parametres.component.css'
})
export class ParametresComponent {
  
  // Profile data
  profileData = {
    firstName: 'Marie',
    lastName: 'Dubois',
    email: 'marie.dubois@immopro.fr',
    phone: '+33 6 12 34 56 78',
    birthDate: '1985-03-15',
    address: '123 Rue de la République',
    postalCode: '75001',
    city: 'Paris',
    country: 'France',
    bio: 'Agent immobilier certifié avec 8 ans d\'expérience dans la gestion locative et la vente de propriétés résidentielles à Paris et en région parisienne.'
  };

  // Professional data
  professionalData = {
    title: 'Agent Immobilier Senior',
    agency: 'ImmoPro Paris Centre',
    cardNumber: 'CPI 7501 2023 000 123 456',
    cardDate: '2016-09-15',
    specializations: {
      residentialSale: true,
      rentalManagement: true,
      commercialRealEstate: false,
      rentalInvestment: true
    },
    geographicZones: {
      parisCenter: true,
      parisWest: true,
      neuilly: false,
      boulogne: false
    },
    languages: {
      french: true,
      english: true,
      spanish: false,
      italian: false
    }
  };

  // Notification preferences
  notificationPreferences = {
    newMessages: true,
    appointmentReminders: true,
    weeklyReports: false,
    newFeatures: true
  };

  // App preferences
  appPreferences = {
    language: 'Français',
    timezone: 'Europe/Paris (UTC+1)',
    dateFormat: 'DD/MM/YYYY',
    currency: 'EUR (€)',
    theme: 'Clair'
  };

  // Privacy settings
  privacySettings = {
    publicProfile: true,
    activityStats: true,
    location: false
  };

  onUploadProfileImage() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e: any) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const profileAvatar = document.getElementById('profile-avatar') as HTMLImageElement;
          if (profileAvatar) {
            profileAvatar.src = e.target.result;
          }
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  }

  onPersonalInfoSubmit() {
    alert('Informations personnelles mises à jour avec succès!');
  }

  onProfessionalInfoSubmit() {
    alert('Informations professionnelles mises à jour avec succès!');
  }

  onPasswordSubmit() {
    alert('Mot de passe modifié avec succès!');
  }

  onPreferencesSubmit() {
    alert('Préférences sauvegardées avec succès!');
  }

  onSaveChanges() {
    alert('Toutes les modifications ont été sauvegardées!');
  }

  onCancelChanges() {
    alert('Modifications annulées');
  }
}
