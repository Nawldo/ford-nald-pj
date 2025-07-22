import { Component, OnInit, LOCALE_ID, AfterViewInit } from '@angular/core'; 
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { RouterLink } from '@angular/router';
import { AnimationService } from '../../services/animation'; 
import { ViewChildren, QueryList, ElementRef } from '@angular/core';
registerLocaleData(localePt);

interface Vehicle {
  id: number;
  vehicle: string;
  volumetotal: number;
  connected: number;
  softwareUpdates: number;
  img: string;
  vin: string;
  price: number;
}

interface VehicleDetails {
  id: number;
  odometro: number;
  nivelCombustivel: number;
  status: 'on' | 'off';
  lat: number;
  long: number;
}
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'], // Ou .scss
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }]
})
export class DashboardComponent implements OnInit, AfterViewInit {
  vehicles: Vehicle[] = [];
  selectedVehicle: (Vehicle & VehicleDetails) | null = null;
  errorMessage: string | null = null;

  private vehiclesApiUrl = 'http://localhost:3001/vehicles'; 
  private vehicleDetailsApiUrl = 'http://localhost:3001/vehicleData'; 

  constructor(private http: HttpClient, private animationService: AnimationService) { }

  @ViewChildren('vehicleCard') vehicleCards!: QueryList<ElementRef>;

  ngOnInit(): void {
    this.loadVehicles();
  }

  ngAfterViewInit(): void {
    this.vehicleCards.changes.subscribe(() => {
      this.applyCardAnimations();
    });
    this.applyCardAnimations();
  }

  private applyCardAnimations(): void {
    this.vehicleCards.forEach((card, index) => {
      if (!card.nativeElement.classList.contains('animate__animated')) {
        const delay = index * 100;
        this.animationService.observeElementForAnimation(card, 'animate__fadeInUp', `animate__delay-${delay}ms`);
      }
    });
  }

  loadVehicles(): void {
    this.http.get<any>(this.vehiclesApiUrl)
      .pipe(
        catchError(error => {
          this.errorMessage = 'Falha ao carregar veículos. Verifique o console.';
          console.error('Erro ao buscar veículos:', error);
          return of({ vehicles: [] });
        })
      )
      .subscribe(response => {
        if (response && response.vehicles) {
          const allVehiclesData = [
            ...response.vehicles, 
            { id: 5, vehicle: "Mustang-e", volumetotal: 75000, connected: 60000, softwareUpdates: 30000, img: "http://localhost:3001/img/mustang-e.png" },
            { id: 6, vehicle: "Maverick", volumetotal: 40000, connected: 35000, softwareUpdates: 12000, img: "http://localhost:3001/img/maverick.png" }
          ];

          this.vehicles = allVehiclesData.map((v: any) => {
            let vinMap: { [key: number]: string } = {
              1: "2FRHDUYS2Y63NHD22454", // Ranger
              2: "2RFAASDY54E4HDU34874", // Mustang
              3: "2FRHDUYS2Y63NHD22455", // Territory
              4: "2RFAASDY54E4HDU34875", // Bronco Sport
              5: "2FMUEYS2Y63MUE456",    // Mustang-e
              6: "2FMAHDYS2Y63MAV789"    // Maverick 
            };

            let priceMap: { [key: number]: number } = { // Preços dos carros
              1: 280000.00,
              2: 550000.00,
              3: 185000.00,
              4: 210000.00,
              5: 450000.00, 
              6: 230000.00  
            };

            return {
              ...v,
              vin: vinMap[v.id] || `VIN-DESCONHECIDO-${v.id}`,
              price: priceMap[v.id] || 0
            };
          });
          console.log('Veículos carregados com sucesso:', this.vehicles);
        } else {
          this.errorMessage = 'Formato de dados inesperado da API.';
          console.warn('Resposta da API não contém a propriedade "vehicles".', response);
        }
      });
  }

  loadVehicleDetails(vehicleId: number): void {
    const vehicleToDetail = this.vehicles.find(v => v.id === vehicleId);
    if (vehicleToDetail) {
      this.http.post<VehicleDetails>(this.vehicleDetailsApiUrl, { vin: vehicleToDetail.vin })
        .pipe(
          catchError(error => {
            this.errorMessage = `Falha ao carregar detalhes do veículo ${vehicleToDetail.vehicle}.`;
            console.error('Erro ao buscar detalhes do veículo:', error);
            this.selectedVehicle = null;
            return of(null);
          })
        )
        .subscribe(details => {
          if (details) {
            this.selectedVehicle = { ...vehicleToDetail, ...details };
            console.log('Detalhes do veículo carregados:', this.selectedVehicle);
          }
        });
    }
  }
}