import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessário para *ngIf
import { Router, RouterLink } from '@angular/router'; // Necessário para routerLink e navegação
import { AuthService } from '../../services/auth.service'; // Seu serviço de autenticação

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink], // RouterLink é necessário para routerLink
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Ou .scss
})
export class HeaderComponent implements OnInit {
currentYear: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // Nada aqui por enquanto, a lógica está nos métodos
  }

  // Método para verificar se o usuário está logado
  isLoggedIn(): boolean {
    return this.authService.isAutenticado();
  }

  // Método para ir para a página de login
  goToLogin(): void {
    this.router.navigate(['/']); // Redireciona para a rota raiz (que é o login)
  }

  // Método para fazer logout
  logout(): void {
    this.authService.logout(); // Chama o método de logout do seu serviço
    this.router.navigate(['/']); // Redireciona para o login após o logout
  }
}
