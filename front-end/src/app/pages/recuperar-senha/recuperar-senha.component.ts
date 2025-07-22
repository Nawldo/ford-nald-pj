import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessário para *ngIf (se usar)
import { FormsModule } from '@angular/forms'; // Necessário para [(ngModel)]
import { Router, RouterLink } from '@angular/router'; // Para navegação e routerLink

@Component({
  selector: 'app-recuperar-senha',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, // Importa FormsModule para que [(ngModel)] funcione
    RouterLink // Importa RouterLink para a diretiva routerLink
  ],
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.css'] // Ou .scss
})
export class RecuperarSenhaComponent {
  email: string = ''; // Propriedade para vincular ao input de email

  constructor(private router: Router) { } // Injetando o Router

  recoverPassword(): void {
    if (this.email) {
      console.log('Solicitação de recuperação de senha para:', this.email);
      alert('Se o email estiver cadastrado, um link de recuperação de senha foi enviado!');
      this.email = ''; // Limpa o campo de email
      this.router.navigate(['/']); // Opcional: Redireciona para a página de login
    } else {
      alert('Por favor, digite seu email.');
    }
  }
}