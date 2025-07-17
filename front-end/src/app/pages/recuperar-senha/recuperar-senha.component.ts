import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-senha',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.css']
})
export class RecuperarSenhaComponent {
  email = '';
  currentYear = new Date().getFullYear();

  constructor(private router: Router) {}

  enviarRecuperacao() {
    alert(`Se houver conta com o e-mail ${this.email}, enviaremos as instruções!`);
    this.router.navigate(['/login']);
  }
}
