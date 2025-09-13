import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export interface PropertyFormData {
  // Étape 1 - Informations générales
  title: string;
  propertyType: string;
  status: string;
  price: number;
  description: string;

  // Localisation
  address: string;
  city: string;
  postalCode: string;

  // Caractéristiques
  surface: number;
  bedrooms: number;
  bathrooms: number;
  floor?: number;
  equipment: string[];
  furnished: string;
  deposit: number;
  petsAllowed: string;
  smokingAllowed: string;

  // Documents requis
  requiredDocuments: DocumentRequirement[];
}

export interface DocumentRequirement {
  id: string;
  name: string;
  type: 'text' | 'select' | 'checkbox';
  required: boolean;
  options?: string[]; // Pour les select
  value?: any;
}

@Component({
  selector: 'app-add-property',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  currentStep = 1;
  totalSteps = 2;

  propertyForm: FormGroup;
  uploadedImages: File[] = [];

  // Options pour les selects
  propertyTypes = ['Appartement', 'Maison', 'Villa', 'Studio', 'Loft'];
  statusOptions = ['À vendre', 'À louer'];

  // Équipements disponibles
  availableEquipment = [
    'Parking', 'Balcon', 'Jardin', 'Piscine', 'Ascenseur', 'Cave', 'Terrasse', 'Cheminée'
  ];

  // Documents requis par défaut
  defaultDocuments: DocumentRequirement[] = [];

  customDocuments: DocumentRequirement[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.propertyForm = this.fb.group({
      // Étape 1
      title: ['', Validators.required],
      propertyType: ['', Validators.required],
      status: ['À vendre', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      surface: ['', [Validators.required, Validators.min(0)]],
      bedrooms: ['', [Validators.required, Validators.min(0)]],
      bathrooms: ['', [Validators.required, Validators.min(0)]],
      floor: [''],
      equipment: [[]],
      furnished: [''],
      deposit: [''],
      petsAllowed: [''],
      smokingAllowed: ['']
    });
  }

  ngOnInit(): void {
    // Plus besoin d'initialiser les documents par défaut
  }

  nextStep(): void {
    if (this.currentStep < this.totalSteps) {
      // Valider les champs requis de l'étape actuelle
      if (this.validateCurrentStep()) {
        this.currentStep++;
      }
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  goToStep(step: number): void {
    if (step >= 1 && step <= this.totalSteps) {
      // Vérifier que toutes les étapes précédentes sont valides
      if (this.canNavigateToStep(step)) {
        this.currentStep = step;
      }
    }
  }

  validateCurrentStep(): boolean {
    if (this.currentStep === 1) {
      const requiredFields = ['title', 'propertyType', 'status', 'price', 'description', 'address', 'city', 'postalCode', 'surface', 'bedrooms', 'bathrooms'];
      for (const field of requiredFields) {
        if (!this.propertyForm.get(field)?.value) {
          alert(`Le champ ${field} est requis`);
          return false;
        }
      }
    }
    return true;
  }

  canNavigateToStep(step: number): boolean {
    if (step === 1) return true;
    if (step === 2) return this.validateCurrentStep();
    return true;
  }

  onFileSelected(event: any): void {
    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        this.uploadedImages.push(files[i]);
      }
    }
  }

  removeImage(index: number): void {
    this.uploadedImages.splice(index, 1);
  }

  getImagePreview(file: File): string {
    return URL.createObjectURL(file);
  }

  onEquipmentChange(equipment: string, event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    const currentEquipment = this.propertyForm.get('equipment')?.value || [];
    if (checked) {
      this.propertyForm.patchValue({
        equipment: [...currentEquipment, equipment]
      });
    } else {
      this.propertyForm.patchValue({
        equipment: currentEquipment.filter((e: string) => e !== equipment)
      });
    }
  }


  onDocumentTypeChange(index: number, event: Event): void {
    const type = (event.target as HTMLSelectElement).value as 'text' | 'select' | 'checkbox';
    this.updateDocumentType(index, type);
  }

  onSelectOptionChange(docIndex: number, optionIndex: number, event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.updateSelectOption(docIndex, optionIndex, value);
  }

  addCustomDocument(): void {
    const newDoc: DocumentRequirement = {
      id: `custom_${Date.now()}`,
      name: '',
      type: 'text',
      required: false,
      value: '',
      options: []
    };
    this.customDocuments.push(newDoc);
    this.propertyForm.addControl(`custom_doc_${newDoc.id}`, this.fb.control(''));
  }

  removeCustomDocument(index: number): void {
    const doc = this.customDocuments[index];
    this.propertyForm.removeControl(`custom_doc_${doc.id}`);
    this.customDocuments.splice(index, 1);
  }

  updateDocumentType(index: number, type: 'text' | 'select' | 'checkbox'): void {
    this.customDocuments[index].type = type;
    if (type === 'select') {
      this.customDocuments[index].options = ['Option 1', 'Option 2'];
    } else {
      this.customDocuments[index].options = [];
    }
  }

  addSelectOption(docIndex: number): void {
    if (!this.customDocuments[docIndex].options) {
      this.customDocuments[docIndex].options = [];
    }
    this.customDocuments[docIndex].options!.push('');
  }

  removeSelectOption(docIndex: number, optionIndex: number): void {
    if (this.customDocuments[docIndex].options && this.customDocuments[docIndex].options!.length > 1) {
      this.customDocuments[docIndex].options!.splice(optionIndex, 1);
    }
  }

  updateSelectOption(docIndex: number, optionIndex: number, value: string): void {
    if (this.customDocuments[docIndex].options) {
      this.customDocuments[docIndex].options![optionIndex] = value;
    }
  }

  onSubmit(): void {
    if (this.propertyForm.valid) {
      const formData = this.propertyForm.value;
      console.log('Formulaire soumis', formData);
      // Ici vous pouvez envoyer les données au backend
      this.router.navigate(['/espace-proprietaire/proprietes']);
    } else {
      console.log('Formulaire invalide');
    }
  }

  cancel(): void {
    this.router.navigate(['/espace-proprietaire/proprietes']);
  }

  goBack(): void {
    this.router.navigate(['/espace-proprietaire/proprietes']);
  }
}
