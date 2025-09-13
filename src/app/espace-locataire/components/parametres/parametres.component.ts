import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface SettingSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  iconBg: string;
  items: SettingItem[];
}

interface SettingItem {
  id: string;
  label: string;
  description: string;
  type: 'toggle' | 'input' | 'select' | 'textarea';
  value: any;
  options?: { value: string; label: string }[];
  required?: boolean;
  placeholder?: string;
}

@Component({
  selector: 'app-parametres',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.css']
})
export class ParametresComponent implements OnInit {
  // User profile data
  userProfile = {
    firstName: 'Pierre',
    lastName: 'Martin',
    email: 'pierre.martin@email.com',
    phone: '06 12 34 56 78',
    avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg',
    address: '123 Rue de la Paix, 75001 Paris',
    birthDate: '1985-03-15',
    occupation: 'Développeur',
    emergencyContact: 'Marie Martin - 06 98 76 54 32'
  };

  // Settings sections
  settingsSections: SettingSection[] = [
    {
      id: 'account',
      title: 'Compte et profil',
      description: 'Gérez vos informations personnelles et vos préférences de compte',
      icon: 'fa-user',
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      items: [
        {
          id: 'email-notifications',
          label: 'Notifications par email',
          description: 'Recevez des notifications importantes par email',
          type: 'toggle',
          value: true
        },
        {
          id: 'sms-notifications',
          label: 'Notifications SMS',
          description: 'Recevez des alertes urgentes par SMS',
          type: 'toggle',
          value: false
        },
        {
          id: 'language',
          label: 'Langue de l\'interface',
          description: 'Choisissez la langue d\'affichage de l\'application',
          type: 'select',
          value: 'fr',
          options: [
            { value: 'fr', label: 'Français' },
            { value: 'en', label: 'English' },
            { value: 'es', label: 'Español' }
          ]
        },
        {
          id: 'timezone',
          label: 'Fuseau horaire',
          description: 'Définissez votre fuseau horaire pour les rendez-vous',
          type: 'select',
          value: 'Europe/Paris',
          options: [
            { value: 'Europe/Paris', label: 'Europe/Paris (GMT+1)' },
            { value: 'Europe/London', label: 'Europe/London (GMT+0)' },
            { value: 'America/New_York', label: 'America/New_York (GMT-5)' }
          ]
        }
      ]
    },
    {
      id: 'privacy',
      title: 'Confidentialité et sécurité',
      description: 'Contrôlez la confidentialité de vos données et la sécurité de votre compte',
      icon: 'fa-shield-halved',
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100',
      items: [
        {
          id: 'data-sharing',
          label: 'Partage de données',
          description: 'Autoriser le partage anonyme de données pour améliorer le service',
          type: 'toggle',
          value: true
        },
        {
          id: 'profile-visibility',
          label: 'Visibilité du profil',
          description: 'Rendre votre profil visible aux autres utilisateurs',
          type: 'toggle',
          value: false
        },
        {
          id: 'two-factor',
          label: 'Authentification à deux facteurs',
          description: 'Ajouter une couche de sécurité supplémentaire à votre compte',
          type: 'toggle',
          value: false
        },
        {
          id: 'session-timeout',
          label: 'Délai d\'expiration de session',
          description: 'Temps avant déconnexion automatique en cas d\'inactivité',
          type: 'select',
          value: '30',
          options: [
            { value: '15', label: '15 minutes' },
            { value: '30', label: '30 minutes' },
            { value: '60', label: '1 heure' },
            { value: '120', label: '2 heures' }
          ]
        }
      ]
    },
    {
      id: 'notifications',
      title: 'Notifications',
      description: 'Configurez vos préférences de notification pour rester informé',
      icon: 'fa-bell',
      iconColor: 'text-orange-600',
      iconBg: 'bg-orange-100',
      items: [
        {
          id: 'appointment-reminders',
          label: 'Rappels de rendez-vous',
          description: 'Recevez des rappels avant vos rendez-vous',
          type: 'toggle',
          value: true
        },
        {
          id: 'payment-reminders',
          label: 'Rappels de paiement',
          description: 'Notifications pour les échéances de paiement',
          type: 'toggle',
          value: true
        },
        {
          id: 'maintenance-updates',
          label: 'Mises à jour de maintenance',
          description: 'Informations sur l\'état de vos demandes de maintenance',
          type: 'toggle',
          value: true
        },
        {
          id: 'newsletter',
          label: 'Newsletter',
          description: 'Recevez notre newsletter avec les dernières actualités',
          type: 'toggle',
          value: false
        },
        {
          id: 'notification-frequency',
          label: 'Fréquence des notifications',
          description: 'À quelle fréquence souhaitez-vous recevoir les notifications',
          type: 'select',
          value: 'immediate',
          options: [
            { value: 'immediate', label: 'Immédiatement' },
            { value: 'daily', label: 'Quotidiennement' },
            { value: 'weekly', label: 'Hebdomadairement' }
          ]
        }
      ]
    },
    {
      id: 'appearance',
      title: 'Apparence',
      description: 'Personnalisez l\'apparence de l\'interface selon vos préférences',
      icon: 'fa-palette',
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100',
      items: [
        {
          id: 'theme',
          label: 'Thème',
          description: 'Choisissez entre le thème clair et sombre',
          type: 'select',
          value: 'light',
          options: [
            { value: 'light', label: 'Clair' },
            { value: 'dark', label: 'Sombre' },
            { value: 'auto', label: 'Automatique' }
          ]
        },
        {
          id: 'compact-mode',
          label: 'Mode compact',
          description: 'Interface plus dense pour économiser l\'espace',
          type: 'toggle',
          value: false
        },
        {
          id: 'animations',
          label: 'Animations',
          description: 'Activer les animations et transitions',
          type: 'toggle',
          value: true
        },
        {
          id: 'font-size',
          label: 'Taille de police',
          description: 'Ajustez la taille du texte selon vos besoins',
          type: 'select',
          value: 'medium',
          options: [
            { value: 'small', label: 'Petite' },
            { value: 'medium', label: 'Moyenne' },
            { value: 'large', label: 'Grande' }
          ]
        }
      ]
    }
  ];

  // Form states
  isEditingProfile = false;
  isChangingPassword = false;
  isLoading = false;
  saveSuccess = false;

  // Password change form
  passwordForm = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  ngOnInit(): void {
    // Initialize component
  }

  onToggleSetting(sectionId: string, itemId: string): void {
    const section = this.settingsSections.find(s => s.id === sectionId);
    if (section) {
      const item = section.items.find(i => i.id === itemId);
      if (item && item.type === 'toggle') {
        item.value = !item.value;
        this.saveSettings();
      }
    }
  }

  onSelectChange(sectionId: string, itemId: string, value: string): void {
    const section = this.settingsSections.find(s => s.id === sectionId);
    if (section) {
      const item = section.items.find(i => i.id === itemId);
      if (item && item.type === 'select') {
        item.value = value;
        this.saveSettings();
      }
    }
  }

  onEditProfile(): void {
    this.isEditingProfile = true;
  }

  onSaveProfile(): void {
    this.isLoading = true;
    
    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;
      this.isEditingProfile = false;
      this.showSuccessMessage('Profil mis à jour avec succès');
    }, 1500);
  }

  onCancelEdit(): void {
    this.isEditingProfile = false;
  }

  onChangePassword(): void {
    this.isChangingPassword = true;
  }

  onSavePassword(): void {
    if (this.passwordForm.newPassword !== this.passwordForm.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }

    if (this.passwordForm.newPassword.length < 8) {
      alert('Le mot de passe doit contenir au moins 8 caractères');
      return;
    }

    this.isLoading = true;
    
    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;
      this.isChangingPassword = false;
      this.passwordForm = {
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      };
      this.showSuccessMessage('Mot de passe modifié avec succès');
    }, 1500);
  }

  onCancelPasswordChange(): void {
    this.isChangingPassword = false;
    this.passwordForm = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    };
  }

  onExportData(): void {
    this.isLoading = true;
    
    // Simulate data export
    setTimeout(() => {
      this.isLoading = false;
      this.showSuccessMessage('Données exportées avec succès');
    }, 2000);
  }

  onDeleteAccount(): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.')) {
      if (confirm('Cette action supprimera définitivement toutes vos données. Tapez "SUPPRIMER" pour confirmer.')) {
        this.isLoading = true;
        
        // Simulate account deletion
        setTimeout(() => {
          this.isLoading = false;
          alert('Compte supprimé avec succès');
        }, 3000);
      }
    }
  }

  private saveSettings(): void {
    // Simulate saving settings
    console.log('Settings saved:', this.settingsSections);
  }

  private showSuccessMessage(message: string): void {
    this.saveSuccess = true;
    setTimeout(() => {
      this.saveSuccess = false;
    }, 3000);
  }

  getSettingValue(sectionId: string, itemId: string): any {
    const section = this.settingsSections.find(s => s.id === sectionId);
    if (section) {
      const item = section.items.find(i => i.id === itemId);
      return item?.value;
    }
    return null;
  }
}
