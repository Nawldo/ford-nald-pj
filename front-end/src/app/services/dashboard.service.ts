import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { Veiculo, VehicleData } from './../models/cartao'; // Ajusta o caminho se o modelo 'cartao.ts' estiver em outro lugar

@Injectable({
  providedIn: 'root' // Garante que o serviço pode ser injetado em qualquer lugar
})
export class DashboardService {
  http = inject(HttpClient); // Injeção do HttpClient
  private apiUrl = "http://localhost:3001"; // URL base da sua API (porta 3001)

  constructor() { }

  /**
   * @method getVeiculos
   * @description
   * Busca a lista completa de veículos da API.
   * A API retorna um array de objetos Veiculo diretamente na rota /vehicles.
   * @returns Observable<Veiculo[]> Retorna um Observable de um array de veículos.
   */
  getVeiculos(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(`${this.apiUrl}/vehicles`);
  }

  /**
   * @method getVehicleDataByVin
   * @description
   * Busca dados detalhados de um veículo pelo seu VIN.
   * A API espera um POST para /vehicleData e o VIN no corpo da requisição.
   * @param vin O VIN (Vehicle Identification Number) do veículo.
   * @returns Observable<VehicleData> Retorna um Observable de um objeto VehicleData.
   */
  getVehicleDataByVin(vin: string): Observable<VehicleData> {
    return this.http.post<VehicleData>(`${this.apiUrl}/vehicleData`, { vin });
  }
}

