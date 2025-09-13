import { Routes } from '@angular/router';
import { AccueilComponent } from './acceuil/accueil.component';

export const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { 
    path: 'proprietes', 
    loadComponent: () => import('./pages/proprietes/proprietes.component').then(m => m.ProprietesComponent)
  },
  { 
    path: 'proprietes/:id', 
    loadComponent: () => import('./pages/proprietes/property-detail/property-detail.component').then(m => m.PropertyDetailComponent)
  },
  { 
    path: 'dossier-location/:id', 
    loadComponent: () => import('./dossier-location/dossier-location.component').then(m => m.DossierLocationComponent)
  },
  { 
    path: 'login', 
    loadComponent: () => import('./authentication/authentication.component').then(m => m.AuthenticationComponent)
  },
  { 
    path: 'services', 
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesPageComponent)
  },
  { 
    path: 'a-propos', 
    loadComponent: () => import('./pages/a-propos/a-propos.component').then(m => m.AProposComponent)
  },
  { 
    path: 'contact', 
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  { 
    path: 'mentions-legales', 
    loadComponent: () => import('./pages/mentions-legales/mentions-legales.component').then(m => m.MentionsLegalesComponent)
  },
  { 
    path: 'politique-confidentialite', 
    loadComponent: () => import('./pages/politique-confidentialite/politique-confidentialite.component').then(m => m.PolitiqueConfidentialiteComponent)
  },
  { 
    path: 'cgv', 
    loadComponent: () => import('./pages/cgv/cgv.component').then(m => m.CgvComponent)
  },
  {
    path: 'espace-proprietaire',
    loadComponent: () => import('./espace-proprietaire/espace-proprietaire.component').then(m => m.EspaceProprietaireComponent),
    loadChildren: () => import('./espace-proprietaire/espace-proprietaire.routes').then(m => m.espaceProprietaireRoutes)
  },
  {
    path: 'espace-locataire',
    loadComponent: () => import('./espace-locataire/espace-locataire.component').then(m => m.EspaceLocataireComponent),
    loadChildren: () => import('./espace-locataire/espace-locataire.routes').then(m => m.espaceLocataireRoutes)
  },
  { path: '**', redirectTo: '/accueil' }
];
