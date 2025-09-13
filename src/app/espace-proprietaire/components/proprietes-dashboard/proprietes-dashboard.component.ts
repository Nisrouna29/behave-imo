import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proprietes-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proprietes-dashboard.component.html',
  styleUrl: './proprietes-dashboard.component.css'
})
export class ProprietesDashboardComponent {

  constructor(private router: Router) {}

  addProperty(): void {
    this.router.navigate(['/espace-proprietaire/ajouter-propriete']);
  }
}
