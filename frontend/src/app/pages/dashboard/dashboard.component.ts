import { Component } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  vehicles: any[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    this.vehicleService.getVehicles().subscribe({
      next: res => this.vehicles = res.vehicles,
      error: err => alert('Falha ao buscar veículos: ' + (err.error?.message || 'Erro inesperado'))
    });
  }
}
