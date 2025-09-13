import { Routes } from '@angular/router';
import { LocataireAccueilComponent } from './components/accueil/accueil.component';
import { MesCandidaturesComponent } from './components/mes-candidatures/mes-candidatures.component';
import { MesLogementsComponent } from './components/mes-logements/mes-logements.component';
import { QuittancesLoyerComponent } from './components/quittances-loyer/quittances-loyer.component';
import { MesContratsComponent } from './components/mes-contrats/mes-contrats.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';

export const espaceLocataireRoutes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: LocataireAccueilComponent },
  { path: 'mes-candidatures', component: MesCandidaturesComponent },
  { path: 'mes-logements', component: MesLogementsComponent },
  { path: 'quittances', component: QuittancesLoyerComponent },
  { path: 'mes-contrats', component: MesContratsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'maintenance', component: MaintenanceComponent },
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
