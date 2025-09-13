import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedHeaderComponent } from '../shared/header/shared-header.component';
import { DossierData, UploadedFile } from './dossier-location.interface';

@Component({
  selector: 'app-dossier-location',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, SharedHeaderComponent],
  templateUrl: './dossier-location.component.html',
  styleUrl: './dossier-location.component.css'
})
export class DossierLocationComponent implements OnInit {
  activeRoute = '/dossier-location';
  propertyId: number = 0;

  // Using signals for reactive state management
  dossierData = signal<DossierData>({
    propertyId: 0,
    propertyTitle: '',
    propertyAddress: '',
    propertyPrice: '',
    propertyType: '',
    progress: 25,
    identity: {
      idNumber: '',
      idDocument: [],
      addressDocument: []
    },
    financial: {
      monthlySalary: '',
      contractType: 'CDI',
      salaryDocuments: [],
      bankDocuments: []
    },
    professional: {
      employerName: '',
      position: '',
      employerDocument: []
    }
  });

  uploadedFiles = signal<UploadedFile[]>([]);
  isDragOver = signal<boolean>(false);

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.propertyId = +params['id'];
      this.loadPropertyData();
    });
  }

  loadPropertyData() {
    // Simulate loading property data
    const mockData: DossierData = {
      ...this.dossierData(),
      propertyId: this.propertyId,
      propertyTitle: 'Villa contemporaine',
      propertyAddress: '15 Avenue des Tilleuls, Neuilly-sur-Seine',
      propertyPrice: '1 250€/mois',
      propertyType: 'Location'
    };
    this.dossierData.set(mockData);
  }

  onFileUpload(event: Event, category: string, type: string) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const files = Array.from(input.files);
      this.handleFileUpload(files, category, type);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragOver.set(true);
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragOver.set(false);
  }

  onDrop(event: DragEvent, category: string, type: string) {
    event.preventDefault();
    this.isDragOver.set(false);

    if (event.dataTransfer && event.dataTransfer.files) {
      const files = Array.from(event.dataTransfer.files);
      this.handleFileUpload(files, category, type);
    }
  }

  private handleFileUpload(files: File[], category: string, type: string) {
    const newFiles: UploadedFile[] = files.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
      type: file.type,
      file: file,
      uploadedAt: new Date()
    }));

    this.uploadedFiles.update(current => [...current, ...newFiles]);

    // Update dossier data
    const currentData = this.dossierData();
    if (category === 'identity') {
      if (type === 'id') {
        currentData.identity.idDocument = files;
      } else if (type === 'address') {
        currentData.identity.addressDocument = files;
      }
    } else if (category === 'financial') {
      if (type === 'salary') {
        currentData.financial.salaryDocuments = files;
      } else if (type === 'bank') {
        currentData.financial.bankDocuments = files;
      }
    } else if (category === 'professional') {
      currentData.professional.employerDocument = files;
    }

    this.dossierData.set({ ...currentData });
    this.updateProgress();
  }

  updateProgress() {
    const data = this.dossierData();
    let completed = 0;
    let total = 0;

    // Identity documents
    total += 2;
    if (data.identity.idNumber) completed++;
    if (data.identity.idDocument.length > 0) completed++;
    if (data.identity.addressDocument.length > 0) completed++;

    // Financial documents
    total += 2;
    if (data.financial.monthlySalary) completed++;
    if (data.financial.salaryDocuments.length > 0) completed++;

    // Professional documents
    total += 2;
    if (data.professional.employerName) completed++;
    if (data.professional.position) completed++;

    const progress = Math.round((completed / total) * 100);
    this.dossierData.update(data => ({ ...data, progress }));
  }

  triggerFileInput(inputId: string) {
    const input = document.getElementById(inputId) as HTMLInputElement;
    if (input) {
      input.click();
    }
  }

  removeFile(fileId: string) {
    this.uploadedFiles.update(files => files.filter(f => f.id !== fileId));
    this.updateProgress();
  }

  onSaveDraft() {
    console.log('Saving draft...', this.dossierData());
    // Implement save draft functionality
  }

  onSubmitDossier() {
    console.log('Submitting dossier...', this.dossierData());
    // Implement submit functionality
  }

  onBackToProperties() {
    this.router.navigate(['/proprietes']);
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}
