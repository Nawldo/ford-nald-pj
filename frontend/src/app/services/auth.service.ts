import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:3001/login'; // ou sua rota de autenticação

  constructor(private http: HttpClient, private router: Router) {}

  login(nome: string, senha: string) {
    return this.http.post(this.apiUrl, { nome, senha });
  }

  isAutenticado(): boolean {
    return localStorage.getItem('auth') === 'true';
  }

  logout(): void {
    localStorage.removeItem('auth');
    this.router.navigate(['/']); // redireciona para login após logout
  }
}
