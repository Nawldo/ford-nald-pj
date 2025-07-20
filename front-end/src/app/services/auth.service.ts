import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap, catchError, of } from 'rxjs';

interface LoginResponse {
  token: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:3001/login'; 

  constructor(private http: HttpClient, private router: Router) {}

  login(nome: string, senha: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, { nome, senha }).pipe(
      tap((res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('auth', 'true');
      }),
      catchError((error) => {
        console.error('Erro ao fazer login:', error);
        return of({ token: '' }); // ou pode lançar erro dependendo do tratamento desejado
      })
    );
  }

  isAutenticado(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('auth');
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
