import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var Highcharts: any;

@Component({
  selector: 'app-statistiques',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Attendre que Highcharts et tous ses modules soient chargés
    this.waitForHighchartsAndModules();
  }

  private waitForHighchartsAndModules(): void {
    const checkHighcharts = () => {
      if (typeof Highcharts !== 'undefined') {
        console.log('Highcharts détecté, vérification des modules...');
        // Vérifier que les modules spéciaux sont chargés
        if (this.checkHighchartsModules()) {
          console.log('Tous les modules sont chargés, initialisation des graphiques...');
          this.initializeCharts();
        } else {
          console.log('Attente des modules Highcharts...');
          setTimeout(checkHighcharts, 200);
        }
      } else {
        console.log('Attente de Highcharts...');
        setTimeout(checkHighcharts, 200);
      }
    };

    // Démarrer la vérification après un délai initial
    setTimeout(checkHighcharts, 500);
  }

  private checkHighchartsModules(): boolean {
    // Vérifier que les modules spéciaux sont disponibles
    try {
      // Vérifier si les modules sont chargés en testant les propriétés
      return Highcharts.chart &&
             typeof Highcharts.chart === 'function' &&
             Highcharts.seriesTypes &&
             Highcharts.seriesTypes.solidgauge;
    } catch (e) {
      console.log('Modules pas encore chargés:', e);
      return false;
    }
  }

  private initializeCharts(): void {
    console.log('Initialisation des graphiques...');

    try {
      this.createMonthlyRevenueChart();
      this.createRevenuePieChart();
      this.createOccupancyGauge();
      this.createVacancyChart();
      this.createGeographicChart();
      this.createProfitChart();
      this.createCashflowChart();
      this.createForecastChart();
    } catch (error) {
      console.error('Erreur lors de l\'initialisation des graphiques:', error);
    }
  }

  private createMonthlyRevenueChart(): void {
    Highcharts.chart('monthly-revenue-chart-container', {
      chart: {
        type: 'column',
        backgroundColor: 'transparent'
      },
      credits: { enabled: false },
      title: { text: null },
      xAxis: {
        categories: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc']
      },
      yAxis: {
        title: { text: 'Revenus (€)' }
      },
      series: [{
        name: 'Revenus 2024',
        data: [42580, 38920, 45230, null, null, null, null, null, null, null, null, null],
        color: '#f97316'
      }, {
        name: 'Revenus 2023',
        data: [38000, 41200, 39800, 42300, 44100, 43200, 45800, 44500, 43200, 46100, 44800, 47200],
        color: '#e5e7eb'
      }],
      plotOptions: {
        column: {
          borderRadius: 4
        }
      }
    });
  }

  private createRevenuePieChart(): void {
    Highcharts.chart('revenue-pie-chart', {
      chart: {
        type: 'pie',
        backgroundColor: 'transparent'
      },
      credits: { enabled: false },
      title: { text: null },
      plotOptions: {
        pie: {
          innerSize: '60%',
          dataLabels: {
            enabled: false
          }
        }
      },
      series: [{
        name: 'Revenus',
        data: [
          { name: 'Résidentiel', y: 78, color: '#f97316' },
          { name: 'Commercial', y: 15, color: '#3b82f6' },
          { name: 'Parking', y: 7, color: '#10b981' }
        ]
      }]
    });
  }

  private createOccupancyGauge(): void {
    Highcharts.chart('occupancy-gauge', {
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

  private createVacancyChart(): void {
    Highcharts.chart('vacancy-chart', {
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
        title: { text: 'Taux de vacance (%)' },
        max: 20
      },
      series: [{
        name: 'Vacance',
        data: [15.2, 12.8, 12.5, null, null, null],
        color: '#ef4444'
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
  }

  private createGeographicChart(): void {
    Highcharts.chart('geographic-chart', {
      chart: {
        type: 'treemap',
        backgroundColor: 'transparent'
      },
      credits: { enabled: false },
      title: { text: null },
      series: [{
        type: 'treemap',
        layoutAlgorithm: 'squarified',
        data: [{
          name: 'Paris Centre',
          value: 45,
          color: '#3b82f6'
        }, {
          name: 'Neuilly-sur-Seine',
          value: 25,
          color: '#f97316'
        }, {
          name: 'Boulogne-Billancourt',
          value: 20,
          color: '#10b981'
        }, {
          name: 'Autres',
          value: 10,
          color: '#6b7280'
        }]
      }]
    });
  }

  private createProfitChart(): void {
    Highcharts.chart('profit-chart', {
      chart: {
        type: 'bar',
        backgroundColor: 'transparent'
      },
      credits: { enabled: false },
      title: { text: null },
      xAxis: {
        categories: ['Q1 2024']
      },
      yAxis: {
        title: { text: null }
      },
      series: [{
        name: 'Revenus',
        data: [135690],
        color: '#10b981'
      }, {
        name: 'Charges',
        data: [-31730],
        color: '#ef4444'
      }],
      plotOptions: {
        bar: {
          stacking: 'normal'
        }
      }
    });
  }

  private createCashflowChart(): void {
    Highcharts.chart('cashflow-chart', {
      chart: {
        type: 'column',
        backgroundColor: 'transparent'
      },
      credits: { enabled: false },
      title: { text: null },
      xAxis: {
        categories: ['Jan', 'Fév', 'Mar']
      },
      yAxis: {
        title: { text: null }
      },
      series: [{
        name: 'Flux de trésorerie',
        data: [42580, 38920, 45230],
        color: '#10b981'
      }],
      plotOptions: {
        column: {
          borderRadius: 4
        }
      }
    });
  }

  private createForecastChart(): void {
    Highcharts.chart('forecast-chart', {
      chart: {
        type: 'line',
        backgroundColor: 'transparent'
      },
      credits: { enabled: false },
      title: { text: null },
      xAxis: {
        categories: ['Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep']
      },
      yAxis: {
        title: { text: 'Revenus (€)' }
      },
      series: [{
        name: 'Prévisions',
        data: [46800, 47200, 48100, 47800, 48500, 49200],
        color: '#8b5cf6',
        dashStyle: 'ShortDash'
      }, {
        name: 'Intervalle de confiance',
        data: [44200, 44800, 45600, 45300, 46000, 46700],
        color: '#8b5cf6',
        fillOpacity: 0.3,
        type: 'areaspline'
      }]
    });
  }
}
