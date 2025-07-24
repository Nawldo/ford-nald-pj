import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessário para @for, @if
import { Router, RouterLink } from '@angular/router'; // Para navegação e routerLink

// Interfaces para os tipos de dados
interface Dealer {
  id: number;
  name: string;
  address: string;
  phone: string;
}

interface Charger {
  id: number;
  name: string;
  address: string;
  type: string; // Ex: "AC", "DC Rápido"
}

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'] // Ou .scss
})
export class ListaComponent implements OnInit {
  dealers: Dealer[] = [];
  chargers: Charger[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadDealers();
    this.loadChargers();
  }

  loadDealers(): void {
    // Dados simulados de concessionárias
    this.dealers = [
      { id: 1, name: 'Ford Atlântica', address: 'Av. Paralela, 1234 - Salvador, BA', phone: '(71) 3333-4444' },
      { id: 2, name: 'Ford Center Paulista', address: 'Av. Paulista, 500 - São Paulo, SP', phone: '(11) 5555-6666' },
      { id: 3, name: 'Ford Sul Veículos', address: 'Rua Principal, 789 - Porto Alegre, RS', phone: '(51) 7777-8888' },
      { id: 4, name: 'Ford Minas Gerais', address: 'Av. Contorno, 100 - Belo Horizonte, MG', phone: '(31) 2222-1111' },
    ];
  }

  loadChargers(): void {
    // Dados simulados de pontos de recarga
    this.chargers = [
      { id: 1, name: 'Estação Eco Charge - SP', address: 'Rua do Carregador, 10 - São Paulo, SP', type: 'DC Rápido' },
      { id: 2, name: 'Ponto Ford - BA', address: 'Av. da Bahia, 50 - Salvador, BA', type: 'AC' },
      { id: 3, name: 'Eletroposto Central - RJ', address: 'Rua da Carga, 200 - Rio de Janeiro, RJ', type: 'DC Rápido' },
    ];
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }
}