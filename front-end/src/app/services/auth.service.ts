import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap, catchError, of } from 'rxjs';

interface LoginResponse {
  token: string;
  // Aqui pode adicionar outros dados que a API retorna, como nome, perfil, etc.
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:3001/login'; // substitua pela URL real da API

  constructor(private http: HttpClient, private router: Router) {}

  login(usuario: string, senha: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, { usuario, senha }).pipe(
      tap((res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('auth', 'true'); // <-- ESSENCIAL: Salva a flag 'auth' como 'true'
      }),
      catchError((error) => {
        console.error('Erro ao fazer login:', error);
        // Em caso de erro, garanta que o localStorage é limpo
        localStorage.removeItem('token');
        localStorage.removeItem('auth'); // <-- ESSENCIAL: Limpa a flag 'auth' em caso de erro
        return of({ token: '' }); // Retorna um Observable de sucesso vazio para não quebrar a cadeia
      })
    );
  }

  isAutenticado(): boolean {
    const token = localStorage.getItem('token');
    const isAuthenticatedFlag = localStorage.getItem('auth'); // Pega o valor da flag
    // O usuário é considerado autenticado APENAS se tiver token E a flag 'auth' for 'true' string
    return !!token && isAuthenticatedFlag === 'true';
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('auth'); // <-- ESSENCIAL: Garante que a flag 'auth' também é removida!
    this.router.navigate(['/']); // Redireciona para a rota raiz (login)
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
