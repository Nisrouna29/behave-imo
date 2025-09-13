import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedHeaderComponent } from '../../shared/header/shared-header.component';

@Component({
  selector: 'app-politique-confidentialite',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedHeaderComponent],
  templateUrl: './politique-confidentialite.component.html',
  styleUrl: './politique-confidentialite.component.css'
})
export class PolitiqueConfidentialiteComponent {
  activeRoute = '/politique-confidentialite';
}
