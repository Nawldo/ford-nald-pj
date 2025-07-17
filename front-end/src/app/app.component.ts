import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ListaComponent } from './pages/lista/lista.component';
import { PoliticaPrivacidadeComponent } from './pages/politica-privacidade/politica-privacidade.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    HomeComponent,
    CadastroComponent,
    ListaComponent,
    PoliticaPrivacidadeComponent,
    LoginComponent
  ]
})
export class AppComponent {
  pagina: string = 'home';
  mostrarLoginModal: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  abrirLogin(): void {
    this.mostrarLoginModal = true;
  }

  logout(): void {
    this.authService.logout();
    this.pagina = 'home';
  }
}
