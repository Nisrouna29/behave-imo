import { Routes } from '@angular/router';
import { AccueilComponent } from './acceuil/accueil.component';
import { ProprietesComponent } from './pages/proprietes/proprietes.component';
import { ServicesPageComponent } from './pages/services/services.component';
import { AProposComponent } from './pages/a-propos/a-propos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PropertyDetailComponent } from './pages/proprietes/property-detail/property-detail.component';
import { DossierLocationComponent } from './dossier-location/dossier-location.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { PolitiqueConfidentialiteComponent } from './pages/politique-confidentialite/politique-confidentialite.component';
import { CgvComponent } from './pages/cgv/cgv.component';
import { EspaceProprietaireComponent } from './espace-proprietaire/espace-proprietaire.component';
import { espaceProprietaireRoutes } from './espace-proprietaire/espace-proprietaire.routes';
import { EspaceLocataireComponent } from './espace-locataire/espace-locataire.component';
import { espaceLocataireRoutes } from './espace-locataire/espace-locataire.routes';

export const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'proprietes', component: ProprietesComponent },
  { path: 'proprietes/:id', component: PropertyDetailComponent },
  { path: 'dossier-location/:id', component: DossierLocationComponent },
  { path: 'login', component: AuthenticationComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'mentions-legales', component: MentionsLegalesComponent },
  { path: 'politique-confidentialite', component: PolitiqueConfidentialiteComponent },
  { path: 'cgv', component: CgvComponent },
  {
    path: 'espace-proprietaire',
    component: EspaceProprietaireComponent,
    children: espaceProprietaireRoutes
  },
  {
    path: 'espace-locataire',
    component: EspaceLocataireComponent,
    children: espaceLocataireRoutes
  },
  { path: '**', redirectTo: '/accueil' }
];
