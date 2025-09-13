import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedHeaderComponent } from '../../shared/header/shared-header.component';

@Component({
  selector: 'app-cgv',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedHeaderComponent],
  templateUrl: './cgv.component.html',
  styleUrl: './cgv.component.css'
})
export class CgvComponent {
  activeRoute = '/cgv';
}
