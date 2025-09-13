import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prendre-rendez-vous',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prendre-rendez-vous.component.html',
  styleUrl: './prendre-rendez-vous.component.css'
})
export class PrendreRendezVousComponent {
  selectedType: string | null = null;
  selectedAgent: string | null = null;
  selectedDate: string | null = null;
  selectedTime: string | null = null;
  
  appointmentTypes = [
    {
      id: 'visit',
      label: 'Visite de logement',
      icon: 'fa-home',
      color: 'text-orange-500',
      description: 'Visiter un bien immobilier disponible',
      duration: '45 minutes'
    },
    {
      id: 'consultation',
      label: 'Consultation',
      icon: 'fa-comments',
      color: 'text-blue-500',
      description: 'Discuter de votre dossier ou projet',
      duration: '30 minutes'
    },
    {
      id: 'signing',
      label: 'Signature de contrat',
      icon: 'fa-file-signature',
      color: 'text-green-500',
      description: 'Finaliser la signature de votre bail',
      duration: '60 minutes'
    },
    {
      id: 'inspection',
      label: 'État des lieux',
      icon: 'fa-clipboard-check',
      color: 'text-purple-500',
      description: 'Entrée ou sortie de logement',
      duration: '90 minutes'
    },
    {
      id: 'maintenance',
      label: 'Maintenance',
      icon: 'fa-tools',
      color: 'text-red-500',
      description: 'Intervention technique ou réparation',
      duration: 'Variable'
    },
    {
      id: 'other',
      label: 'Autre',
      icon: 'fa-question-circle',
      color: 'text-gray-500',
      description: 'Autre type de rendez-vous',
      duration: 'À définir'
    }
  ];

  agents = [
    {
      id: 'marie',
      name: 'Marie Dubois',
      role: 'Gestionnaire principal',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg',
      rating: 4.9,
      stars: 5
    },
    {
      id: 'julien',
      name: 'Julien Martin',
      role: 'Spécialiste visites',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg',
      rating: 4.7,
      stars: 4
    },
    {
      id: 'sophie',
      name: 'Sophie Laurent',
      role: 'Experte contrats',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg',
      rating: 5.0,
      stars: 5
    },
    {
      id: 'auto',
      name: 'Attribution automatique',
      role: 'Agent le plus disponible',
      avatar: null,
      icon: 'fa-magic',
      recommended: true
    }
  ];

  timeSlots = {
    morning: [
      { time: '09:00', available: true },
      { time: '09:30', available: true },
      { time: '10:00', available: false },
      { time: '10:30', available: true },
      { time: '11:00', available: true },
      { time: '11:30', available: true }
    ],
    afternoon: [
      { time: '14:00', available: true },
      { time: '14:30', available: true },
      { time: '15:00', available: true },
      { time: '15:30', available: false },
      { time: '16:00', available: true },
      { time: '16:30', available: true },
      { time: '17:00', available: true },
      { time: '17:30', available: true }
    ]
  };

  upcomingAppointments = [
    {
      id: 1,
      type: 'État des lieux d\'entrée',
      icon: 'fa-clipboard-check',
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      date: '15 janvier 2025 à 14:00',
      agent: 'Marie Dubois',
      agentAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg',
      status: 'Confirmé',
      statusColor: 'bg-blue-100 text-blue-800'
    },
    {
      id: 2,
      type: 'Visite appartement 2 pièces',
      icon: 'fa-home',
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100',
      date: '18 janvier 2025 à 10:30',
      agent: 'Julien Martin',
      agentAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg',
      status: 'En attente',
      statusColor: 'bg-orange-100 text-orange-800'
    },
    {
      id: 3,
      type: 'Signature contrat de bail',
      icon: 'fa-file-signature',
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100',
      date: '22 janvier 2025 à 16:00',
      agent: 'Sophie Laurent',
      agentAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg',
      status: 'Confirmé',
      statusColor: 'bg-green-100 text-green-800'
    }
  ];

  appointmentHistory = [
    {
      date: '10 Déc 2024',
      type: 'Visite logement',
      typeIcon: 'fa-home',
      typeColor: 'text-orange-500',
      agent: 'Marie Dubois',
      agentAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg',
      duration: '45 min',
      status: 'Terminé',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      date: '05 Déc 2024',
      type: 'Consultation',
      typeIcon: 'fa-comments',
      typeColor: 'text-blue-500',
      agent: 'Sophie Laurent',
      agentAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg',
      duration: '30 min',
      status: 'Terminé',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      date: '28 Nov 2024',
      type: 'Visite logement',
      typeIcon: 'fa-home',
      typeColor: 'text-orange-500',
      agent: 'Julien Martin',
      agentAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg',
      duration: '-',
      status: 'Annulé',
      statusColor: 'bg-red-100 text-red-800'
    }
  ];

  faqItems = [
    {
      question: 'Comment puis-je modifier un rendez-vous ?',
      answer: 'Vous pouvez modifier un rendez-vous jusqu\'à 24h avant la date prévue. Cliquez sur le bouton "Modifier" dans la liste de vos rendez-vous ou contactez directement votre agent. Une notification de confirmation vous sera envoyée.',
      expanded: false
    },
    {
      question: 'Que faire si je suis en retard ?',
      answer: 'Prévenez immédiatement votre agent par téléphone. Un retard de moins de 15 minutes peut généralement être accommodé. Au-delà, le rendez-vous pourra être reporté selon les disponibilités.',
      expanded: false
    },
    {
      question: 'Puis-je programmer un rendez-vous en urgence ?',
      answer: 'Pour les urgences, utilisez le bouton "Appel d\'urgence" ou contactez directement notre ligne d\'urgence au 01 23 45 67 89. Nous ferons notre possible pour vous proposer un créneau dans les plus brefs délais.',
      expanded: false
    },
    {
      question: 'Quels documents dois-je apporter ?',
      answer: 'Apportez toujours une pièce d\'identité. Selon le type de rendez-vous, vous pourriez avoir besoin de justificatifs de revenus, d\'attestations d\'assurance, ou d\'autres documents spécifiques qui vous seront précisés lors de la confirmation.',
      expanded: false
    }
  ];

  appointmentForm = {
    subject: '',
    address: '',
    description: '',
    phone: '',
    email: '',
    emailReminder: true,
    smsReminder: false,
    calendarInvite: true
  };

  onSelectType(typeId: string): void {
    this.selectedType = typeId;
  }

  onSelectAgent(agentId: string): void {
    this.selectedAgent = agentId;
  }

  onSelectDate(date: string): void {
    this.selectedDate = date;
  }

  onSelectTime(time: string): void {
    this.selectedTime = time;
  }

  onAppointmentSlotClick(typeId: string): void {
    this.selectedType = typeId;
  }

  onAgentSlotClick(agentId: string): void {
    this.selectedAgent = agentId;
  }

  onDateCellClick(date: string): void {
    this.selectedDate = date;
  }

  onTimeSlotClick(time: string): void {
    this.selectedTime = time;
  }

  onModifyAppointment(appointment: any): void {
    console.log('Modifier le rendez-vous:', appointment);
    // Logique pour modifier un rendez-vous
  }

  onCancelAppointment(appointment: any): void {
    if (confirm('Êtes-vous sûr de vouloir annuler ce rendez-vous ?')) {
      console.log('Annuler le rendez-vous:', appointment);
      // Logique pour annuler un rendez-vous
    }
  }

  onViewAppointment(appointment: any): void {
    console.log('Voir le rendez-vous:', appointment);
    // Logique pour voir les détails d'un rendez-vous
  }

  onRescheduleAppointment(appointment: any): void {
    console.log('Reprogrammer le rendez-vous:', appointment);
    // Logique pour reprogrammer un rendez-vous
  }

  onExportAppointments(): void {
    console.log('Exporter les rendez-vous');
    // Logique pour exporter les rendez-vous
  }

  onCalendarView(): void {
    console.log('Vue calendrier');
    // Logique pour passer en vue calendrier
  }

  onEmergencyCall(): void {
    console.log('Appel d\'urgence');
    // Logique pour l'appel d'urgence
  }

  onViewMyAppointments(): void {
    console.log('Voir mes rendez-vous');
    // Navigation vers la page mes rendez-vous
  }

  getSelectedTypeLabel(): string {
    const type = this.appointmentTypes.find(t => t.id === this.selectedType);
    return type ? type.label : 'Non sélectionné';
  }

  getSelectedAgentName(): string {
    const agent = this.agents.find(a => a.id === this.selectedAgent);
    return agent ? agent.name : 'Non sélectionné';
  }

  getSelectedDuration(): string {
    const type = this.appointmentTypes.find(t => t.id === this.selectedType);
    return type ? type.duration : '-';
  }

  toggleFaq(index: number): void {
    this.faqItems[index].expanded = !this.faqItems[index].expanded;
  }

  onSubmit(): void {
    if (!this.selectedType) {
      alert('Veuillez sélectionner un type de rendez-vous.');
      return;
    }

    if (!this.selectedAgent) {
      alert('Veuillez sélectionner un agent.');
      return;
    }

    if (!this.selectedDate) {
      alert('Veuillez sélectionner une date.');
      return;
    }

    if (!this.selectedTime) {
      alert('Veuillez sélectionner un créneau horaire.');
      return;
    }

    if (!this.appointmentForm.subject.trim()) {
      alert('Veuillez saisir l\'objet du rendez-vous.');
      return;
    }

    const confirmMessage = `Confirmer le rendez-vous ${this.getSelectedTypeLabel()} le ${new Date(this.selectedDate).toLocaleDateString('fr-FR')} à ${this.selectedTime} avec ${this.getSelectedAgentName()} ?`;
    
    if (confirm(confirmMessage)) {
      // Simulation de la confirmation avec ajout dynamique
      setTimeout(() => {
        alert('Rendez-vous confirmé avec succès ! Vous allez recevoir une confirmation par email.');
        
        // Ajouter le nouveau rendez-vous à la liste
        const newAppointment = {
          id: this.upcomingAppointments.length + 1,
          type: this.appointmentForm.subject,
          icon: this.getTypeIcon(this.selectedType!),
          iconColor: this.getTypeColor(this.selectedType!),
          iconBg: this.getTypeBgColor(this.selectedType!),
          date: `${new Date(this.selectedDate!).toLocaleDateString('fr-FR')} à ${this.selectedTime}`,
          agent: this.getSelectedAgentName(),
          agentAvatar: this.getAgentAvatar(this.selectedAgent!),
          status: 'Nouveau',
          statusColor: 'bg-orange-200 text-orange-900'
        };
        
        this.upcomingAppointments.unshift(newAppointment);
        this.resetForm();
      }, 2000);
    }
  }

  private getTypeIcon(type: string): string {
    const typeMap: { [key: string]: string } = {
      'visit': 'fa-home',
      'consultation': 'fa-comments',
      'signing': 'fa-file-signature',
      'inspection': 'fa-clipboard-check',
      'maintenance': 'fa-tools',
      'other': 'fa-question-circle'
    };
    return typeMap[type] || 'fa-calendar';
  }

  private getTypeColor(type: string): string {
    const colorMap: { [key: string]: string } = {
      'visit': 'text-orange-600',
      'consultation': 'text-blue-600',
      'signing': 'text-green-600',
      'inspection': 'text-purple-600',
      'maintenance': 'text-red-600',
      'other': 'text-gray-600'
    };
    return colorMap[type] || 'text-gray-600';
  }

  private getTypeBgColor(type: string): string {
    const bgMap: { [key: string]: string } = {
      'visit': 'bg-orange-100',
      'consultation': 'bg-blue-100',
      'signing': 'bg-green-100',
      'inspection': 'bg-purple-100',
      'maintenance': 'bg-red-100',
      'other': 'bg-gray-100'
    };
    return bgMap[type] || 'bg-gray-100';
  }

  private getAgentAvatar(agentId: string): string {
    const agent = this.agents.find(a => a.id === agentId);
    return agent?.avatar || '';
  }

  private resetForm(): void {
    this.selectedType = null;
    this.selectedAgent = null;
    this.selectedDate = null;
    this.selectedTime = null;
    this.appointmentForm = {
      subject: '',
      address: '',
      description: '',
      phone: '',
      email: '',
      emailReminder: true,
      smsReminder: false,
      calendarInvite: true
    };
  }
}
