import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para usar *ngIf, *ngFor (se necessário)
import { Router } from '@angular/router'; // Para o botão de voltar
@Component({
  selector: 'app-politica-privacidade',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './politica-privacidade.component.html',
  styleUrls: ['./politica-privacidade.component.css'] // Ou .scss
})
export class PoliticaPrivacidadeComponent {

  constructor(private router: Router) { } // Injetando o Router

  goToHome(): void {
    this.router.navigate(['/home']); // Redireciona para a página Home
  }
}