import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  route?: string;
  badge?: string;
  children?: MenuItem[];
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

@Component({
  selector: 'app-locataire-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class LocataireSidebarComponent {
  @Input() isCollapsed: boolean = false;
  @Output() toggleCollapse = new EventEmitter<void>();
  @Output() navigateTo = new EventEmitter<string>();

  menuSections: MenuSection[] = [
    {
      title: 'Tableau de bord',
      items: [
        { id: 'accueil', label: 'Accueil Locataire', icon: 'fa-home', route: 'accueil' },
        { id: 'candidatures', label: 'Mes Candidatures', icon: 'fa-file-text', route: 'candidatures' },
        { id: 'logement', label: 'Mon Logement', icon: 'fa-building', route: 'logement' }
      ]
    },
    {
      title: 'Documents',
      items: [
        { id: 'quittances', label: 'Quittances de Loyer', icon: 'fa-receipt', route: 'quittances' },
        { id: 'contrats', label: 'Mes Contrats', icon: 'fa-file-contract', route: 'contrats' },
        { id: 'documents', label: 'Documents Divers', icon: 'fa-folder', route: 'documents' }
      ]
    },
    {
      title: 'Communication',
      items: [
        { id: 'messages', label: 'Messages', icon: 'fa-comment', route: 'messages', badge: '2' },
        { id: 'notifications', label: 'Notifications', icon: 'fa-bell', route: 'notifications' }
      ]
    },
    {
      title: 'Services',
      items: [
        { id: 'maintenance', label: 'Demandes Maintenance', icon: 'fa-tools', route: 'maintenance' },
        { id: 'paiements', label: 'Paiements', icon: 'fa-credit-card', route: 'paiements' },
        { id: 'rendez-vous', label: 'Rendez-vous', icon: 'fa-calendar', route: 'rendez-vous' }
      ]
    },
    {
      title: 'Compte',
      items: [
        { id: 'parametres', label: 'Paramètres', icon: 'fa-cog', route: 'parametres' },
        { id: 'aide', label: 'Aide & Support', icon: 'fa-question-circle', route: 'aide' }
      ]
    }
  ];

  activeItem: string = 'accueil';

  onToggleCollapse(): void {
    this.toggleCollapse.emit();
  }

  onNavigate(route: string): void {
    this.activeItem = route;
    this.navigateTo.emit(route);
  }

  getItemClasses(item: MenuItem): string {
    const baseClasses = 'flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer';
    const activeClasses = this.activeItem === item.id 
      ? 'text-orange-600 bg-orange-50' 
      : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600';
    
    return `${baseClasses} ${activeClasses}`;
  }

  getIconClasses(icon: string): string {
    return `fa-solid ${icon} w-5 h-5 ${this.isCollapsed ? 'mx-auto' : 'mr-3'}`;
  }
}
