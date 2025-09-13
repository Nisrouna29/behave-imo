import { Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ProprietesDashboardComponent } from './components/proprietes-dashboard/proprietes-dashboard.component';
import { DossiersLocatairesComponent } from './components/dossiers-locataires/dossiers-locataires.component';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { TenantDetailComponent } from './components/tenant-detail/tenant-detail.component';
import { CandidaturesComponent } from './components/candidatures/candidatures.component';
import { CandidatureDetailComponent } from './components/candidature-detail/candidature-detail.component';
import { GestionPayeComponent } from './components/gestion-paye/gestion-paye.component';
import { StatistiquesComponent } from './components/statistiques/statistiques.component';
import { PlanningComponent } from './components/planning/planning.component';
import { ParametresComponent } from './components/parametres/parametres.component';
import { ChatComponent } from './components/chat/chat.component';

export const espaceProprietaireRoutes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'proprietes', component: ProprietesDashboardComponent },
  { path: 'ajouter-propriete', component: AddPropertyComponent },
  { path: 'dossiers-locataires', component: DossiersLocatairesComponent },
  { path: 'dossiers-locataires/:id', component: TenantDetailComponent },
  { path: 'acheteurs', component: ProprietesDashboardComponent }, // Placeholder pour l'instant
  { path: 'candidatures', component: CandidaturesComponent },
  { path: 'candidatures/:id', component: CandidatureDetailComponent },
  { path: 'gestion-paye', component: GestionPayeComponent },
  { path: 'statistiques', component: StatistiquesComponent },
  { path: 'planning', component: PlanningComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'parametres', component: ParametresComponent },
];
