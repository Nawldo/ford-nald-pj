import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router'; // Para navegação e routerLink

@Component({
  selector: 'app-clube-vantagens',
  standalone: true,
  imports: [CommonModule, RouterLink], // RouterLink é necessário para os botões e links
  templateUrl: './clube-vantagens.html',
  styleUrls: ['./clube-vantagens.css']
})
export class ClubeVantagensComponent {

  constructor(private router: Router) { }

  goToHome(): void {
    this.router.navigate(['/home']);
  }
}