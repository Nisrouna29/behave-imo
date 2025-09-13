import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Appointment {
  id: number;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  type: 'visite' | 'maintenance' | 'signature' | 'autre';
  status: 'confirmed' | 'scheduled' | 'pending';
  client?: string;
  phone?: string;
  property?: string;
  notes?: string;
}

interface AvailabilityTemplate {
  id: number;
  name: string;
  description: string;
  schedule: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-planning',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {
  currentView: 'week' | 'month' = 'week';
  currentWeek: string = '18 - 24 Mars 2024';
  
  appointments: Appointment[] = [
    {
      id: 1,
      title: 'Visite Villa Neuilly',
      date: '2024-03-18',
      startTime: '14:00',
      endTime: '15:00',
      type: 'visite',
      status: 'confirmed',
      client: 'Pierre Martin',
      phone: '06 12 34 56 78'
    },
    {
      id: 2,
      title: 'Maintenance Plomberie',
      date: '2024-03-19',
      startTime: '10:00',
      endTime: '12:00',
      type: 'maintenance',
      status: 'scheduled',
      property: 'Studio Montmartre',
      notes: 'Réparation urgente'
    },
    {
      id: 3,
      title: 'Signature de bail',
      date: '2024-03-20',
      startTime: '15:30',
      endTime: '16:30',
      type: 'signature',
      status: 'confirmed',
      client: 'Famille Dubois',
      property: 'Appartement Paris 16'
    },
    {
      id: 4,
      title: 'Rapport mensuel',
      date: '2024-03-22',
      startTime: '17:00',
      endTime: '18:00',
      type: 'autre',
      status: 'pending',
      notes: 'Analyse des performances - Toutes propriétés'
    }
  ];

  availabilityTemplates: AvailabilityTemplate[] = [
    {
      id: 1,
      name: 'Semaine standard',
      description: 'Lun-Ven: 9h00 - 18h00\nSam: 10h00 - 16h00\nDim: Fermé',
      schedule: 'Lun-Ven: 9h00 - 18h00',
      icon: 'fa-clock',
      color: 'orange'
    },
    {
      id: 2,
      name: 'Weekend intensif',
      description: 'Sam-Dim: 8h00 - 20h00\nVisites groupées\nCréneaux de 30min',
      schedule: 'Sam-Dim: 8h00 - 20h00',
      icon: 'fa-calendar-weekend',
      color: 'blue'
    },
    {
      id: 3,
      name: 'Horaires flexibles',
      description: 'Lun-Dim: Variable\nSelon demandes clients\nCréneaux personnalisés',
      schedule: 'Lun-Dim: Variable',
      icon: 'fa-user-clock',
      color: 'green'
    }
  ];

  availabilityForm = {
    startDate: '2024-03-18',
    endDate: '2024-03-24',
    startTime: '09:00',
    endTime: '18:00',
    activityType: 'Visites immobilières',
    days: {
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: false,
      sunday: false
    },
    notes: ''
  };

  statistics = {
    occupancyRate: 85,
    weeklyAppointments: 23,
    averageFreeTime: 4.2,
    scheduledVisits: 12
  };

  constructor() { }

  ngOnInit(): void {
    this.loadPlanningData();
  }

  loadPlanningData(): void {
    // Charger les données du planning depuis l'API
    console.log('Chargement des données du planning...');
  }

  switchView(view: 'week' | 'month'): void {
    this.currentView = view;
  }

  navigateWeek(direction: 'prev' | 'next'): void {
    // Logique de navigation entre les semaines
    console.log(`Navigation ${direction} semaine`);
  }

  addAvailability(): void {
    console.log('Ajout d\'une nouvelle disponibilité:', this.availabilityForm);
    // Logique d'ajout de disponibilité
  }

  applyTemplate(template: AvailabilityTemplate): void {
    console.log('Application du modèle:', template);
    // Logique d'application du modèle
  }

  addAppointment(): void {
    console.log('Ajout d\'un nouveau rendez-vous');
    // Logique d'ajout de rendez-vous
  }

  confirmAppointment(appointment: Appointment): void {
    appointment.status = 'confirmed';
    console.log('Rendez-vous confirmé:', appointment);
  }

  modifyAppointment(appointment: Appointment): void {
    console.log('Modification du rendez-vous:', appointment);
    // Logique de modification
  }

  cancelAppointment(appointment: Appointment): void {
    console.log('Annulation du rendez-vous:', appointment);
    // Logique d'annulation
  }

  getAppointmentStatusClass(status: string): string {
    switch (status) {
      case 'confirmed': return 'bg-orange-500';
      case 'scheduled': return 'bg-blue-500';
      case 'pending': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  }

  getAppointmentStatusText(status: string): string {
    switch (status) {
      case 'confirmed': return 'Confirmé';
      case 'scheduled': return 'Programmé';
      case 'pending': return 'À faire';
      default: return 'Inconnu';
    }
  }

  getAppointmentBorderClass(status: string): string {
    switch (status) {
      case 'confirmed': return 'border-orange-200 bg-orange-50';
      case 'scheduled': return 'border-blue-200 bg-blue-50';
      case 'pending': return 'border-purple-200 bg-purple-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  }

  onCalendarCellClick(day: string, time: string): void {
    console.log(`Clic sur ${day} à ${time}`);
    // Ouvrir modal d'ajout de rendez-vous
  }

  optimizeSchedule(): void {
    console.log('Optimisation automatique du planning');
    // Logique d'optimisation
  }
}
