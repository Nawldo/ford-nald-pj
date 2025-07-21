import { Component, OnInit, LOCALE_ID } from '@angular/core'; 
import { CommonModule, registerLocaleData } from '@angular/common'; 
import localePt from '@angular/common/locales/pt'; 
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { RouterLink } from '@angular/router';

registerLocaleData(localePt); 
interface Vehicle {
  id: number;
  vehicle: string;
  volumetotal: number;
  connected: number;
  softwareUpdates: number;
  img: string;
  vin: string;
  price: number; // <-- Adicionado o preço aqui
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
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }] // <-- Adicione LOCALE_ID nos providers
})
export class DashboardComponent implements OnInit {
  vehicles: Vehicle[] = [];
  selectedVehicle: (Vehicle & VehicleDetails) | null = null;
  errorMessage: string | null = null;

  private vehiclesApiUrl = 'http://localhost:3001/vehicles';
  private vehicleDetailsApiUrl = 'http://localhost:3001/vehicleData';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadVehicles();
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
          // Mapeia os veículos retornados pela API e adiciona o VIN e preço manualmente
          this.vehicles = response.vehicles.map((v: any) => {
            let vinMap: { [key: number]: string } = {
              1: "2FRHDUYS2Y63NHD22454", // VIN da Ranger
              2: "2RFAASDY54E4HDU34874", // VIN do Mustang
              3: "2FRHDUYS2Y63NHD22455", // VIN do Territory
              4: "2RFAASDY54E4HDU34875"  // VIN do Bronco Sport
            };

            // Preços simulados para cada veículo
            let priceMap: { [key: number]: number } = {
              1: 280000.00, // Ranger
              2: 550000.00, // Mustang
              3: 185000.00, // Territory
              4: 210000.00  // Bronco Sport
            };

            return {
              ...v,
              vin: vinMap[v.id] || `VIN-DESCONHECIDO-${v.id}`,
              price: priceMap[v.id] || 0 // <-- Adicionado o preço simulado
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
            // Ao combinar, certifique-se de que o 'price' do Vehicle original seja mantido
            this.selectedVehicle = { ...vehicleToDetail, ...details };
            console.log('Detalhes do veículo carregados:', this.selectedVehicle);
          }
        });
    }
  }
}