import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskDirective
  ],
  providers: [provideNgxMask()]
})
export class CadastroComponent {
  @Output() abrirPrivacidade = new EventEmitter<void>();

  usuario = {
    nome: '',
    cpf: '',
    telefone: '',
    aceiteTermos: false
  };

  cadastrar(): void {
    if (this.usuario.aceiteTermos) {
      console.log('Usuário cadastrado:', this.usuario);
      alert('Cadastro realizado com sucesso!');
      this.usuario = {
        nome: '',
        cpf: '',
        telefone: '',
        aceiteTermos: false
      };
    }
  }

  irParaPrivacidade(): void {
    this.abrirPrivacidade.emit();
  }
}
