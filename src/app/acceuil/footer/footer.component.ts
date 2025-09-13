import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  footerLinks = {
    navigation: [
      { label: 'Accueil', route: '/accueil' },
      { label: 'Propriétés', route: '/proprietes' },
      { label: 'Services', route: '/services' },
      { label: 'À propos', route: '/a-propos' },
      { label: 'Contact', route: '/contact' }
    ],
    quickAccess: [
      { label: 'Trouver un bien', route: '/proprietes' },
      { label: 'Nos services', route: '/services' },
      { label: 'Notre équipe', route: '/a-propos' },
      { label: 'Nous contacter', route: '/contact' }
    ],
    legal: [
      { label: 'Mentions légales', route: '/mentions-legales' },
      { label: 'Politique de confidentialité', route: '/politique-confidentialite' },
      { label: 'CGV', route: '/cgv' }
    ]
  };

  socialLinks = [
    { platform: 'Facebook', icon: 'fa-brands fa-facebook', url: '#' },
    { platform: 'Instagram', icon: 'fa-brands fa-instagram', url: '#' },
    { platform: 'LinkedIn', icon: 'fa-brands fa-linkedin', url: '#' },
    { platform: 'Twitter', icon: 'fa-brands fa-twitter', url: '#' }
  ];

  contactInfo = {
    phone: '+33 1 23 45 67 89',
    email: 'contact&#64;immopro.fr',
    address: '123 Avenue des Champs-Élysées, 75008 Paris',
    hours: 'Lun-Ven: 9h-19h, Sam: 9h-17h'
  };
}
