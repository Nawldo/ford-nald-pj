import { loginGuard } from './core/guards/login.guard';
import { Routes } from '@angular/router';

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
    canActivate: [loginGuard],
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
    path: 'socioford',
    pathMatch: 'full',
    canActivate: [loginGuard],
    loadComponent: () => import('./pages/socioford/socioford.component')
      .then(m => m.SociofordComponent)
  },
  {
    path: 'recuperar-senha',
    loadComponent: () =>
      import('./pages/recuperar-senha/recuperar-senha.component')
        .then(m => m.RecuperarSenhaComponent)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }


];
