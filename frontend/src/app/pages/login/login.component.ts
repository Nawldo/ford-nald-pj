import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { images } from '../../shared/images';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nome = '';
  senha = '';
  backgroundUrl = images.loginBg;
  currentYear = new Date().getFullYear(); // 🔥 agora incluído!

  constructor(private auth: AuthService, private router: Router) {}

  entrar() {
    this.auth.login(this.nome, this.senha).subscribe({
      next: (res: any) => {
        localStorage.setItem('auth', 'true');
        alert(`Bem-vindo, ${res.nome}!`);
        this.router.navigate(['/dashboard']);
      },
      error: err => {
        alert(err.error.message || 'Erro inesperado.');
      }
    });
  }
}
