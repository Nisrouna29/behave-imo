import { Routes } from '@angular/router';
import { LocataireAccueilComponent } from './components/accueil/accueil.component';
import { MesCandidaturesComponent } from './components/mes-candidatures/mes-candidatures.component';
import { MesLogementsComponent } from './components/mes-logements/mes-logements.component';
import { QuittancesLoyerComponent } from './components/quittances-loyer/quittances-loyer.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { PaiementsComponent } from './components/paiements/paiements.component';
import { MesRendezVousComponent } from './components/mes-rendez-vous/mes-rendez-vous.component';
import { PrendreRendezVousComponent } from './components/prendre-rendez-vous/prendre-rendez-vous.component';
import { ParametresComponent } from './components/parametres/parametres.component';

export const espaceLocataireRoutes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: LocataireAccueilComponent },
  { path: 'mes-candidatures', component: MesCandidaturesComponent },
  { path: 'mes-logements', component: MesLogementsComponent },
  { path: 'quittances', component: QuittancesLoyerComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'paiements', component: PaiementsComponent },
  { path: 'rendez-vous', component: MesRendezVousComponent },
  { path: 'prendre-rendez-vous', component: PrendreRendezVousComponent },
  { path: 'parametres', component: ParametresComponent },
  // Ajoutez d'autres routes ici selon vos besoins
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
