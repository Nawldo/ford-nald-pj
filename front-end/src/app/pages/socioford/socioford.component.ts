// C:/dev/ford-nald-pf/front-end/src/app/pages/socioford/socioford.component.ts
import { Component, OnInit, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core'; // Ajuste as importações para incluir ViewChildren, QueryList, ElementRef
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AnimationService } from '../../services/animation'; // <-- CORREÇÃO AQUI: .service

@Component({
  selector: 'app-socioford',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './socioford.component.html',
  styleUrls: ['./socioford.component.css'] // Ou .scss
})
export class SociofordComponent implements OnInit, AfterViewInit { // Implementa OnInit e AfterViewInit

  constructor(private router: Router, private animationService: AnimationService) { }

  @ViewChildren('animatedSection') animatedSections!: QueryList<ElementRef>; // <-- O ViewChildren deve estar aqui, dentro da classe

  ngOnInit(): void {
    // Nada específico aqui para o OnInit neste componente
  }

  ngAfterViewInit(): void {
    // Aplica animações a cada seção quando ela entra na viewport
    this.animatedSections.forEach(section => {
      this.animationService.observeElementForAnimation(section, 'animate__fadeInUp');
    });
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }

  // NOVO: Adicione um método para rolar suavemente para as seções (usado no HTML da sidebar)
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}