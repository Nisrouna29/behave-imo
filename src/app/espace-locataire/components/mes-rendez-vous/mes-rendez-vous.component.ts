import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Appointment {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  agent: string;
  agentAvatar: string;
  status: string;
  icon: string;
  iconColor: string;
  iconBg: string;
  type: string;
}

interface Agent {
  id: string;
  name: string;
  role: string;
  avatar: string;
  available: boolean;
}

interface CalendarDay {
  day: number;
  hasAppointment: boolean;
  isToday: boolean;
}

interface Stats {
  total: number;
  upcoming: number;
  completed: number;
  cancelled: number;
}

interface AppointmentTypeStats {
  name: string;
  count: number;
  percentage: number;
  color: string;
}

interface MonthlyStats {
  name: string;
  count: number;
  percentage: number;
  color: string;
}

interface Feedback {
  title: string;
  date: string;
  agent: string;
  agentAvatar: string;
  rating: number;
  comment: string;
}

@Component({
  selector: 'app-mes-rendez-vous',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mes-rendez-vous.component.html',
  styleUrls: ['./mes-rendez-vous.component.css']
})
export class MesRendezVousComponent implements OnInit {
  // Filter and search
  searchTerm: string = '';
  selectedStatus: string = '';
  selectedType: string = '';
  selectedAgent: string = '';
  activeFilter: string = 'all';
  viewMode: string = 'list';
  
  // Pagination
  currentPage: number = 1;
  itemsPerPage: number = 7;
  
  // Calendar
  currentMonth: string = 'Janvier 2025';
  calendarDays: CalendarDay[] = [];
  
  // Data
  appointments: Appointment[] = [];
  filteredAppointments: Appointment[] = [];
  agents: Agent[] = [];
  stats: Stats = {
    total: 15,
    upcoming: 3,
    completed: 11,
    cancelled: 1
  };
  
  nextAppointment: Appointment | null = null;
  
  appointmentTypeStats: AppointmentTypeStats[] = [
    { name: 'Visites', count: 7, percentage: 47, color: 'bg-green-500' },
    { name: 'États des lieux', count: 4, percentage: 27, color: 'bg-blue-500' },
    { name: 'Signatures', count: 2, percentage: 13, color: 'bg-purple-500' },
    { name: 'Consultations', count: 2, percentage: 13, color: 'bg-orange-500' }
  ];
  
  monthlyStats: MonthlyStats[] = [
    { name: 'Janvier 2025', count: 3, percentage: 60, color: 'bg-orange-500' },
    { name: 'Décembre 2024', count: 5, percentage: 100, color: 'bg-green-500' },
    { name: 'Novembre 2024', count: 4, percentage: 80, color: 'bg-blue-500' },
    { name: 'Octobre 2024', count: 3, percentage: 60, color: 'bg-purple-500' }
  ];
  
  feedbacks: Feedback[] = [
    {
      title: 'Visite studio meublé',
      date: '10 décembre 2024',
      agent: 'Marie Dubois',
      agentAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg',
      rating: 5,
      comment: 'Excellent service ! Marie a été très professionnelle et a répondu à toutes mes questions. La visite s\'est très bien déroulée.'
    },
    {
      title: 'Consultation dossier locatif',
      date: '05 décembre 2024',
      agent: 'Sophie Laurent',
      agentAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg',
      rating: 4,
      comment: 'Très bonne consultation. Sophie m\'a aidé à améliorer mon dossier et m\'a donné de précieux conseils.'
    }
  ];
  
  pendingEvaluations: number = 1;

  ngOnInit(): void {
    this.initializeData();
    this.generateCalendarDays();
    this.filteredAppointments = [...this.appointments];
  }

  private initializeData(): void {
    this.appointments = [
      {
        id: 1,
        title: 'État des lieux d\'entrée',
        description: 'Appartement 3 pièces - 15 rue de la Paix, 75001 Paris',
        date: '15 janvier 2025',
        time: '14:00 - 15:30',
        agent: 'Marie Dubois',
        agentAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg',
        status: 'Confirmé',
        icon: 'fa-clipboard-check',
        iconColor: 'text-blue-600',
        iconBg: 'bg-blue-100',
        type: 'inspection'
      },
      {
        id: 2,
        title: 'Visite appartement 2 pièces',
        description: 'Appartement lumineux - 28 avenue Victor Hugo, 75016 Paris',
        date: '18 janvier 2025',
        time: '10:30 - 11:15',
        agent: 'Julien Martin',
        agentAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg',
        status: 'En attente',
        icon: 'fa-home',
        iconColor: 'text-green-600',
        iconBg: 'bg-green-100',
        type: 'visit'
      },
      {
        id: 3,
        title: 'Signature contrat de bail',
        description: 'Finalisation location - Bureau ImmoPro',
        date: '22 janvier 2025',
        time: '16:00 - 17:00',
        agent: 'Sophie Laurent',
        agentAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg',
        status: 'Confirmé',
        icon: 'fa-file-signature',
        iconColor: 'text-purple-600',
        iconBg: 'bg-purple-100',
        type: 'signing'
      },
      {
        id: 4,
        title: 'Visite studio meublé',
        description: 'Studio centre ville - 5 rue Saint-Antoine, 75004 Paris',
        date: '10 décembre 2024',
        time: '14:30 - 15:15',
        agent: 'Marie Dubois',
        agentAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg',
        status: 'Terminé',
        icon: 'fa-home',
        iconColor: 'text-green-600',
        iconBg: 'bg-green-100',
        type: 'visit'
      },
      {
        id: 5,
        title: 'Consultation dossier locatif',
        description: 'Révision candidature - Bureau ImmoPro',
        date: '05 décembre 2024',
        time: '11:00 - 11:30',
        agent: 'Sophie Laurent',
        agentAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg',
        status: 'Terminé',
        icon: 'fa-comments',
        iconColor: 'text-blue-600',
        iconBg: 'bg-blue-100',
        type: 'consultation'
      },
      {
        id: 6,
        title: 'Visite appartement familial',
        description: '4 pièces avec jardin - 12 rue des Lilas, 92200 Neuilly',
        date: '28 novembre 2024',
        time: '15:00 - 15:45',
        agent: 'Julien Martin',
        agentAvatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg',
        status: 'Annulé',
        icon: 'fa-home',
        iconColor: 'text-red-600',
        iconBg: 'bg-red-100',
        type: 'visit'
      }
    ];

    this.agents = [
      {
        id: 'marie',
        name: 'Marie Dubois',
        role: 'Gestionnaire principal',
        avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg',
        available: true
      },
      {
        id: 'julien',
        name: 'Julien Martin',
        role: 'Spécialiste visites',
        avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg',
        available: false
      },
      {
        id: 'sophie',
        name: 'Sophie Laurent',
        role: 'Experte contrats',
        avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg',
        available: true
      }
    ];

    // Set next appointment
    this.nextAppointment = this.appointments.find(apt => apt.status === 'Confirmé' && new Date(apt.date) > new Date()) || null;
  }

  generateCalendarDays(): void {
    this.calendarDays = [];
    
    // Generate calendar days for January 2025
    const daysInMonth = 31;
    const firstDay = 3; // Wednesday (0 = Sunday, 1 = Monday, etc.)
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      this.calendarDays.push({
        day: 30 - (firstDay - i - 1),
        hasAppointment: false,
        isToday: false
      });
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const hasAppointment = this.appointments.some(apt => {
        const aptDate = new Date(apt.date);
        return aptDate.getDate() === day && aptDate.getMonth() === 0; // January
      });
      
      const isToday = day === 15; // Highlight January 15th
      
      this.calendarDays.push({
        day,
        hasAppointment,
        isToday
      });
    }
    
    // Add remaining cells to complete the grid
    const remainingCells = 42 - this.calendarDays.length;
    for (let i = 1; i <= remainingCells; i++) {
      this.calendarDays.push({
        day: i,
        hasAppointment: false,
        isToday: false
      });
    }
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  onFilterChange(): void {
    this.applyFilters();
  }

  onFilterClick(filter: string): void {
    this.activeFilter = filter;
    this.applyFilters();
  }

  onClearFilters(): void {
    this.searchTerm = '';
    this.selectedStatus = '';
    this.selectedType = '';
    this.selectedAgent = '';
    this.activeFilter = 'all';
    this.applyFilters();
  }

  private applyFilters(): void {
    let filtered = [...this.appointments];

    // Search filter
    if (this.searchTerm.trim()) {
      const searchLower = this.searchTerm.toLowerCase();
      filtered = filtered.filter(apt => 
        apt.title.toLowerCase().includes(searchLower) ||
        apt.description.toLowerCase().includes(searchLower)
      );
    }

    // Status filter
    if (this.selectedStatus) {
      filtered = filtered.filter(apt => {
        switch (this.selectedStatus) {
          case 'confirmed':
            return apt.status === 'Confirmé';
          case 'pending':
            return apt.status === 'En attente';
          case 'completed':
            return apt.status === 'Terminé';
          case 'cancelled':
            return apt.status === 'Annulé';
          default:
            return true;
        }
      });
    }

    // Type filter
    if (this.selectedType) {
      filtered = filtered.filter(apt => apt.type === this.selectedType);
    }

    // Agent filter
    if (this.selectedAgent) {
      filtered = filtered.filter(apt => apt.agent.toLowerCase().includes(this.selectedAgent.toLowerCase()));
    }

    // Active filter buttons
    switch (this.activeFilter) {
      case 'upcoming':
        filtered = filtered.filter(apt => apt.status === 'Confirmé' || apt.status === 'En attente');
        break;
      case 'completed':
        filtered = filtered.filter(apt => apt.status === 'Terminé');
        break;
      case 'cancelled':
        filtered = filtered.filter(apt => apt.status === 'Annulé');
        break;
      default:
        // Show all
        break;
    }

    this.filteredAppointments = filtered;
  }

  onViewModeChange(mode: string): void {
    this.viewMode = mode;
  }

  onPrevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  onNextPage(): void {
    const totalPages = Math.ceil(this.filteredAppointments.length / this.itemsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }

  onPageClick(page: number): void {
    this.currentPage = page;
  }

  getPageNumbers(): number[] {
    const totalPages = Math.ceil(this.filteredAppointments.length / this.itemsPerPage);
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages.slice(0, 3); // Show max 3 pages
  }

  onPrevMonth(): void {
    console.log('Previous month');
    // Implement month navigation
  }

  onNextMonth(): void {
    console.log('Next month');
    // Implement month navigation
  }

  onDateClick(day: CalendarDay): void {
    console.log('Date clicked:', day);
    // Implement date selection
  }

  onNewAppointment(): void {
    console.log('New appointment');
    // Navigate to appointment creation
  }

  onModifyAppointment(appointment: Appointment | null): void {
    if (appointment) {
      console.log('Modify appointment:', appointment);
      // Implement appointment modification
    }
  }

  onCancelAppointment(appointment: Appointment): void {
    if (confirm(`Êtes-vous sûr de vouloir annuler le rendez-vous: ${appointment.title} ?`)) {
      console.log('Cancel appointment:', appointment);
      // Update appointment status
      appointment.status = 'Annulé';
      this.applyFilters();
    }
  }

  onGetDirections(appointment: Appointment | null): void {
    if (appointment) {
      console.log('Get directions to:', appointment.description);
      // Implement directions functionality
    }
  }

  onExportAppointments(): void {
    console.log('Export appointments');
    // Implement export functionality
  }

  onEmergencyCall(): void {
    console.log('Emergency call');
    // Implement emergency call
  }

  onCalendarView(): void {
    console.log('Calendar view');
    // Implement calendar view
  }

  onManageNotifications(): void {
    console.log('Manage notifications');
    // Implement notification management
  }

  onEvaluateNow(): void {
    console.log('Evaluate now');
    // Implement evaluation functionality
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Confirmé':
        return 'status-confirmed';
      case 'En attente':
        return 'status-pending';
      case 'Terminé':
        return 'status-confirmed';
      case 'Annulé':
        return 'status-cancelled';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  getStars(rating: number): boolean[] {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < Math.floor(rating));
    }
    return stars;
  }
}