// C:/dev/ford-nald-pf/front-end/src/app/pages/cadastro/cadastro.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessário para *ngIf (se usar)
import { FormsModule } from '@angular/forms'; // Necessário para [(ngModel)]
import { Router, RouterLink } from '@angular/router'; // Para navegação e routerLink

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, // Importe FormsModule para que [(ngModel)] funcione
    RouterLink // Importe RouterLink para a diretiva routerLink
  ],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'] // Ou .scss
})
export class CadastroComponent {
  usuario = {
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    aceiteTermos: false
  };

  constructor(private router: Router) { } // Injetando o Router

  cadastrar(): void {
    if (!this.usuario.aceiteTermos) {
      alert('Você deve aceitar os termos de uso e a política de privacidade para realizar o cadastro.');
      return; // Para impedir o cadastro se não aceitar os termos
    }

    if (this.usuario.senha !== this.usuario.confirmarSenha) {
      alert('A senha e a confirmação de senha não coincidem.');
      return;
    }

    // Simulação de cadastro: em um projeto real, você faria uma chamada HTTP para a API aqui
    console.log('Dados do usuário para cadastro:', this.usuario);
    alert('Cadastro simulado com sucesso! Agora você pode fazer login.');

    // Limpar o formulário após o cadastro
    this.usuario = {
      nome: '',
      email: '',
      senha: '',
      confirmarSenha: '',
      aceiteTermos: false
    };

    // Opcional: Redirecionar para a página de login após o cadastro
    this.router.navigate(['/']); // Redireciona para a rota raiz (que é o login)
  }
}