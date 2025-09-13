import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedHeaderComponent } from '../../shared/header/shared-header.component';

@Component({
  selector: 'app-mentions-legales',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedHeaderComponent],
  templateUrl: './mentions-legales.component.html',
  styleUrl: './mentions-legales.component.css'
})
export class MentionsLegalesComponent {
  activeRoute = '/mentions-legales';
}
