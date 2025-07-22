import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule, RouterLink]
})
export class LoginComponent {
  @Output() fechar = new EventEmitter<void>();

  login = {
    usuario: '',
    senha: ''
  };

  constructor(private authService: AuthService, private router: Router) {} // Injetando AuthService e Router

  autenticar(): void {
    console.log('Tentando login com:', this.login);

    this.authService.login(this.login.usuario, this.login.senha).subscribe({
      next: (response) => {
        if (response && response.token) { 
          console.log('Login bem-sucedido! Token:', response.token);
          this.fechar.emit(); 

          this.router.navigate(['/home']);
        } else {
          console.warn('Login falhou: Credenciais inválidas ou token não recebido.');
        }
      },
      error: (err) => {
        console.error('Erro de requisição de login:', err);
      },
      complete: () => {
        console.log('Processo de login concluído.');
      }
    });
  }

  fecharModal(): void {
    this.fechar.emit();
  }
}