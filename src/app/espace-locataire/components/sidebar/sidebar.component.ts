import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter, Subscription } from 'rxjs';

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
export class LocataireSidebarComponent implements OnInit, OnDestroy {
  @Input() isCollapsed: boolean = false;
  @Input() isMobileOpen: boolean = false;
  @Output() toggleCollapse = new EventEmitter<void>();
  @Output() navigateTo = new EventEmitter<string>();

  private routerSubscription: Subscription = new Subscription();

  menuSections: MenuSection[] = [
    {
      title: 'Tableau de bord',
      items: [
        { id: 'accueil', label: 'Accueil Locataire', icon: 'fa-home', route: 'accueil' },
        { id: 'candidatures', label: 'Mes Candidatures', icon: 'fa-file-text', route: 'mes-candidatures' },
        { id: 'logement', label: 'Mes Logements', icon: 'fa-building', route: 'mes-logements' }
      ]
    },
    {
      title: 'Documents',
      items: [
        { id: 'quittances', label: 'Quittances de Loyer', icon: 'fa-receipt', route: 'quittances' }
      ]
    },
    {
      title: 'Communication',
      items: [
        { id: 'messages', label: 'Messages', icon: 'fa-comment', route: 'messages', badge: '2' }
      ]
    },
    {
      title: 'Services',
      items: [
        { id: 'maintenance', label: 'Demandes Maintenance', icon: 'fa-tools', route: 'maintenance' },
        { id: 'paiements', label: 'Paiements', icon: 'fa-credit-card', route: 'paiements' },
        { id: 'prendre-rendez-vous', label: 'Prendre RDV', icon: 'fa-calendar-plus', route: 'prendre-rendez-vous' },
        { id: 'rendez-vous', label: 'Mes Rendez-vous', icon: 'fa-calendar', route: 'rendez-vous' }
      ]
    },
    {
      title: 'Compte',
      items: [
        { id: 'parametres', label: 'Paramètres', icon: 'fa-cog', route: 'parametres' }
      ]
    }
  ];

  activeItem: string = 'accueil';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Set initial active item based on current URL
    this.setActiveItemFromUrl();
    
    // Listen to route changes to update active item
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.setActiveItemFromUrl();
      });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  private setActiveItemFromUrl(): void {
    const url = this.router.url;
    const urlSegments = url.split('/');
    const currentRoute = urlSegments[urlSegments.length - 1];
    
    // Find the menu item that matches the current route
    for (const section of this.menuSections) {
      for (const item of section.items) {
        if (item.route === currentRoute || item.id === currentRoute) {
          this.activeItem = item.id;
          return;
        }
      }
    }
    
    // Default to accueil if no match found
    if (currentRoute === '' || currentRoute === 'espace-locataire') {
      this.activeItem = 'accueil';
    }
  }

  onToggleCollapse(): void {
    this.toggleCollapse.emit();
  }

  onNavigate(route: string): void {
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

  getSidebarClasses(): string {
    if (this.isMobileOpen) {
      return 'w-64 fixed z-50';
    }
    return this.isCollapsed ? 'w-16' : 'w-64';
  }
}
