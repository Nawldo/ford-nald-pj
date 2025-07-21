// C:/dev/ford-nald-pf/front-end/src/app/core/guards/login.guard.ts
import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => { // Pode manter route, state para futuras expansões
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isAutenticado()) {
    console.log('loginGuard: Usuário AUTENTICADO. Acesso permitido à rota:', state.url); // Log para depuração
    return true;
  } else {
    console.warn('loginGuard: Usuário NÃO AUTENTICADO. Acesso negado à rota:', state.url, 'Redirecionando para login.'); // Log para depuração
    auth.logout(); // Garante que o localStorage seja limpo, caso algo tenha ficado
    router.navigate(['/']); // Redireciona para a rota raiz (que é o login)
    return false;
  }
};
