// src/app/services/login.service.ts
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { Usuario } from '../models/user'; // Ajuste o caminho se o seu modelo 'user.ts' estiver em outro lugar

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  http = inject(HttpClient);
  private apiUrl = "http://localhost:3001"; // URL base da sua API (porta 3001)

  constructor() {
    // Ao iniciar o serviço, verifica se há um usuário logado no sessionStorage
    if (sessionStorage.getItem('isAuthenticated') === 'true') {
      // Não precisamos definir um 'isAuthenticated' interno aqui,
      // pois isLoggedIn() já verifica o sessionStorage diretamente.
    }
  }

  login(nome: string, senha: string): Observable<Usuario | null> {
    const url = `${this.apiUrl}/login`;
    return this.http.post<Usuario>(url, { nome, senha })
      .pipe(
        tap((user: Usuario) => {
          sessionStorage.setItem("isAuthenticated", "true");
          sessionStorage.setItem("email", user.email);
          console.log("LoginService: Usuário autenticado e dados salvos.", user);
        }),
        catchError((error) => {
          console.error("LoginService: Erro na requisição de login", error);
          sessionStorage.removeItem("isAuthenticated");
          sessionStorage.removeItem("email");
          return of(null);
        })
      );
  }

  // AQUI: Método para verificar o estado de login
  isLoggedIn(): boolean {
    return sessionStorage.getItem("isAuthenticated") === "true";
  }

  // AQUI: Método de logout
  logout(): void {
    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("email");
    console.log("LoginService: Usuário deslogado.");
  }
}
