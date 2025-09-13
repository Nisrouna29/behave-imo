import { Routes } from '@angular/router';
import { LocataireAccueilComponent } from './components/accueil/accueil.component';

export const espaceLocataireRoutes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: LocataireAccueilComponent },
  // Ajoutez d'autres routes ici selon vos besoins
  // { path: 'candidatures', component: CandidaturesComponent },
  // { path: 'logement', component: LogementComponent },
  // { path: 'quittances', component: QuittancesComponent },
  // { path: 'contrats', component: ContratsComponent },
  // { path: 'documents', component: DocumentsComponent },
  // { path: 'messages', component: MessagesComponent },
  // { path: 'notifications', component: NotificationsComponent },
  // { path: 'maintenance', component: MaintenanceComponent },
  // { path: 'paiements', component: PaiementsComponent },
  // { path: 'rendez-vous', component: RendezVousComponent },
  // { path: 'parametres', component: ParametresComponent },
  // { path: 'aide', component: AideComponent },
];
