import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedHeaderComponent } from '../../shared/header/shared-header.component';
import { FooterComponent } from '../../acceuil/footer/footer.component';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  avatar: string;
  bio: string;
  experience: string;
  socialLinks: { platform: string; icon: string; url: string }[];
}

interface Achievement {
  year: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-a-propos',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedHeaderComponent, FooterComponent],
  templateUrl: './a-propos.component.html',
  styleUrl: './a-propos.component.css'
})
export class AProposComponent {
  activeRoute = '/a-propos';

  teamMembers = signal<TeamMember[]>([
    {
      id: 1,
      name: 'Marie Dubois',
      position: 'Directrice commerciale',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg',
      bio: 'Spécialiste de la vente immobilière avec une expertise en marketing digital et accompagnement client.',
      experience: '8 ans',
      socialLinks: [
        { platform: 'linkedin', icon: 'fa-brands fa-linkedin', url: '#' },
        { platform: 'email', icon: 'fa-solid fa-envelope', url: 'mailto:marie&#64;immopro.fr' }
      ]
    },
    {
      id: 2,
      name: 'Pierre Martin',
      position: 'Responsable location',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg',
      bio: 'Expert en gestion locative et recherche de locataires qualifiés pour optimiser vos investissements.',
      experience: '6 ans',
      socialLinks: [
        { platform: 'linkedin', icon: 'fa-brands fa-linkedin', url: '#' },
        { platform: 'email', icon: 'fa-solid fa-envelope', url: 'mailto:pierre&#64;immopro.fr' }
      ]
    },
    {
      id: 3,
      name: 'Sophie Laurent',
      position: 'Gestionnaire de dossiers',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg',
      bio: 'Spécialisée dans le suivi des dossiers locatifs et la gestion des paiements pour les propriétaires.',
      experience: '4 ans',
      socialLinks: [
        { platform: 'linkedin', icon: 'fa-brands fa-linkedin', url: '#' },
        { platform: 'email', icon: 'fa-solid fa-envelope', url: 'mailto:sophie&#64;immopro.fr' }
      ]
    }
  ]);

  achievements = signal<Achievement[]>([
    {
      year: '2024',
      title: 'Création d\'ImmoPro',
      description: 'Lancement de notre nouvelle agence immobilière avec une vision moderne'
    },
    {
      year: '2024',
      title: 'Spécialisation services',
      description: 'Focus sur la vente, location et gestion des dossiers locatifs'
    },
    {
      year: '2024',
      title: 'Plateforme digitale',
      description: 'Développement d\'outils innovants pour la gestion des dossiers'
    },
    {
      year: '2024',
      title: 'Premiers clients',
      description: 'Accompagnement de nos premiers clients dans leurs projets'
    }
  ]);

  values = signal([
    {
      icon: 'fa-solid fa-handshake',
      title: 'Confiance',
      description: 'Nous construisons des relations durables basées sur la transparence et l\'honnêteté.'
    },
    {
      icon: 'fa-solid fa-star',
      title: 'Excellence',
      description: 'Nous nous efforçons de dépasser les attentes de nos clients à chaque étape.'
    },
    {
      icon: 'fa-solid fa-lightbulb',
      title: 'Innovation',
      description: 'Nous adoptons les dernières technologies pour améliorer votre expérience.'
    },
    {
      icon: 'fa-solid fa-users',
      title: 'Service client',
      description: 'Votre satisfaction est notre priorité absolue, disponible 24/7.'
    }
  ]);
}
