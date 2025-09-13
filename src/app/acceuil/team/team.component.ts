import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SocialLink {
  platform: string;
  icon: string;
}

interface TeamMember {
  id: number;
  name: string;
  position: string;
  avatar: string;
  socialLinks: SocialLink[];
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Marie Dubois',
      position: 'Directrice commerciale',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg',
      socialLinks: [
        { platform: 'linkedin', icon: 'fa-brands fa-linkedin' },
        { platform: 'email', icon: 'fa-solid fa-envelope' }
      ]
    },
    {
      id: 2,
      name: 'Pierre Martin',
      position: 'Conseiller senior',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg',
      socialLinks: [
        { platform: 'linkedin', icon: 'fa-brands fa-linkedin' },
        { platform: 'email', icon: 'fa-solid fa-envelope' }
      ]
    }
  ];
}