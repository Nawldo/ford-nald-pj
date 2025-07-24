import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { loginGuard } from './core/guards/login.guard';
import { Routes } from '@angular/router';
import { PoliticaPrivacidadeComponent } from './pages/politica-privacidade/politica-privacidade.component';
import { ListaComponent } from './pages/lista/lista.component';
import { ClubeVantagensComponent } from './pages/clube-vantagens/clube-vantagens'


export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/login/login.component')
      .then(m => m.LoginComponent)
  },
  {
    path: 'home',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home.component')
      .then(m => m.HomeComponent)
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    canActivate: [loginGuard],
    loadComponent: () => import('./pages/dashboard/dashboard.component')
      .then(m => m.DashboardComponent)
  },
  {
    path: 'cadastro',
    pathMatch: 'full',
    loadComponent: () => import('./pages/cadastro/cadastro.component')
      .then(m => m.CadastroComponent)
  },
  {
    path: 'socioford',
    pathMatch: 'full',
    loadComponent: () => import('./pages/socioford/socioford.component')
      .then(m => m.SociofordComponent)
  },
  {
    path: 'recuperar-senha',
    loadComponent: () => import('./pages/recuperar-senha/recuperar-senha.component')
        .then(m => m.RecuperarSenhaComponent)
  },
  {
    path: 'politica-privacidade',
    loadComponent: () => import('./pages/politica-privacidade/politica-privacidade.component')
        .then(m => m.PoliticaPrivacidadeComponent)
  },
  {
    path: 'lista',
    component: ListaComponent
  },
  {
    path: 'clube-vantagens',
    pathMatch: 'full',
    canActivate: [loginGuard],
    loadComponent: () =>
      import('./pages/clube-vantagens/clube-vantagens')
      .then(m => m.ClubeVantagensComponent)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
