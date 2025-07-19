// src/app/pages/login/login.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Certifique-se que Router está importado
import { AuthService } from '../../services/auth.service'; // Certifique-se que AuthService está importado

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule]
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

    // 1. Chamar o método login do AuthService e ASSINAR o Observable
    this.authService.login(this.login.usuario, this.login.senha).subscribe({
      next: (response) => {
        // Este bloco é executado se o login no AuthService foi bem-sucedido
        if (response && response.token) { // Verifica se um token foi retornado (ou outra condição de sucesso)
          console.log('Login bem-sucedido! Token:', response.token);
          alert('Login simulado com sucesso!'); // Feedback visual para o usuário
          this.fechar.emit(); // Fecha o modal/componente de login, se aplicável

          // 2. Redirecionar para a página Home
          this.router.navigate(['/home']);
        } else {
          // Lidar com o caso onde o login na API não retornou token, mas não deu erro HTTP (ex: credenciais inválidas)
          console.warn('Login falhou: Credenciais inválidas ou token não recebido.');
          alert('Usuário ou senha inválidos.'); // Feedback para o usuário
        }
      },
      error: (err) => {
        // Este bloco é executado se houve um erro HTTP na requisição de login (ex: 401, 500)
        console.error('Erro de requisição de login:', err);
        alert('Ocorreu um erro ao tentar fazer login. Tente novamente.');
      },
      complete: () => {
        // Este bloco é executado quando o Observable é concluído (opcional)
        console.log('Processo de login concluído.');
      }
    });
  }

  fecharModal(): void {
    this.fechar.emit();
  }
}