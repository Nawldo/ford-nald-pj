import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms'; 
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
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

  constructor(private router: Router) { }


  cadastrar(form: NgForm): void { 
    if (form.valid) {
      if (this.usuario.senha !== this.usuario.confirmarSenha) {
        console.warn('Cadastro falhou: Senhas não coincidem.');
        form.controls['confirmarSenha'].markAsTouched();
        return;
      }

      console.log('Dados do usuário para cadastro:', this.usuario);
      console.log('Cadastro simulado com sucesso!'); // Feedback no console

      // Limpar o formulário após o cadastro
      this.usuario = {
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: '',
        aceiteTermos: false
      };
      form.resetForm(); // Reseta o estado de validação do formulário, limpando erros visuais
      // Redireciona para a página de login
      this.router.navigate(['/']);

    } else {
      console.warn('Formulário inválido. Por favor, preencha todos os campos corretamente.');
      Object.keys(form.controls).forEach(field => {
        const control = form.controls[field];
        control.markAsTouched(); // Marca o campo como tocado para exibir o erro
        control.markAsDirty(); // Marca o campo como "sujo"
      });
    }
  }
}