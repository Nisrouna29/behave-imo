import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedHeaderComponent } from '../shared/header/shared-header.component';
import { HeroComponent } from './hero/hero.component';
import { StatsComponent } from './stats/stats.component';
import { PropertiesComponent } from './properties/properties.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SharedHeaderComponent,
    HeroComponent,
    StatsComponent,
    PropertiesComponent,
    ServicesComponent,
    TeamComponent,
    FooterComponent
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  activeRoute = '/accueil';
}
