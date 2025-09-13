import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Charger Highcharts dynamiquement
    this.loadHighchartsAndInitialize();
  }

  goToProprietes(): void {
    this.router.navigate(['/espace-proprietaire/proprietes']);
  }

  goToDossiers(): void {
    this.router.navigate(['/espace-proprietaire/dossiers-locataires']);
  }

  goToCandidatures(): void {
    this.router.navigate(['/espace-proprietaire/candidatures']);
  }

  goToStatistiques(): void {
    this.router.navigate(['/espace-proprietaire/statistiques']);
  }

  goToGestionPaye(): void {
    this.router.navigate(['/espace-proprietaire/gestion-paye']);
  }

  addNewProperty(): void {
    this.router.navigate(['/espace-proprietaire/proprietes']);
  }

  viewReports(): void {
    this.router.navigate(['/espace-proprietaire/statistiques']);
  }

  addEvent(): void {
    // Logique pour ajouter un événement
    console.log('Ajout d\'un événement');
  }

  private async loadHighchartsAndInitialize(): Promise<void> {
    try {
      // Charger Highcharts de manière plus simple
      const Highcharts = await import('highcharts');
      
      // Charger les modules un par un
      await import('highcharts/highcharts-more');
      await import('highcharts/modules/solid-gauge');

      // Attendre que tout soit chargé
      setTimeout(() => {
        this.initCharts(Highcharts.default);
      }, 200);
    } catch (error) {
      console.error('Erreur lors du chargement de Highcharts:', error);
    }
  }

  private initCharts(Highcharts: any): void {
    // Initialiser le graphique des revenus
    Highcharts.chart('revenue-chart', {
      chart: {
        type: 'line',
        backgroundColor: 'transparent'
      },
      credits: { enabled: false },
      title: { text: null },
      xAxis: {
        categories: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun']
      },
      yAxis: {
        title: { text: 'Revenus (€)' }
      },
      series: [{
        name: 'Revenus',
        data: [38000, 42000, 45230, 41000, 47000, 45230],
        color: '#f97316'
      }],
      plotOptions: {
        line: {
          marker: {
            enabled: true,
            radius: 5
          }
        }
      }
    });

    // Initialiser le graphique du taux d'occupation
    Highcharts.chart('occupancy-chart', {
      chart: {
        type: 'solidgauge',
        backgroundColor: 'transparent',
        height: 320
      },
      credits: { enabled: false },
      title: { text: null },
      pane: {
        center: ['50%', '85%'],
        size: '140%',
        startAngle: -90,
        endAngle: 90,
        background: {
          backgroundColor: '#f3f4f6',
          innerRadius: '60%',
          outerRadius: '100%',
          shape: 'arc'
        }
      },
      yAxis: {
        min: 0,
        max: 100,
        stops: [
          [0.1, '#f97316'],
          [0.5, '#ea580c'],
          [0.9, '#c2410c']
        ],
        lineWidth: 0,
        tickWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
          y: -70,
          text: 'Taux d\'occupation'
        },
        labels: {
          y: 16
        }
      },
      plotOptions: {
        solidgauge: {
          dataLabels: {
            y: 5,
            borderWidth: 0,
            useHTML: true
          }
        }
      },
      series: [{
        name: 'Occupation',
        data: [87.5],
        dataLabels: {
          format: '<div style="text-align:center"><span style="font-size:25px;color:black">{y}%</span></div>'
        }
      }]
    });
  }
}
