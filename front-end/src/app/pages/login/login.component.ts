import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  autenticar(): void {
    console.log('Login realizado:', this.login);
    alert('Login simulado com sucesso!');
    this.fechar.emit(); // fecha o modal após login
  }

  fecharModal(): void {
    this.fechar.emit(); // fecha ao clicar no X
  }
}
