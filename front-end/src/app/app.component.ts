// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router'; // Necessário para <router-outlet>
import { HeaderComponent } from './shared/header/header.component'; // Importe o Header
import { FooterComponent } from './shared/footer/footer.component'; // Importe o Footer

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, // Onde o conteúdo das rotas é injetado
    HeaderComponent, // Cabeçalho compartilhado
    FooterComponent // Rodapé compartilhado
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ford-nald-pf';
}
