import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 
import { AnimationService } from '../../services/animation'; // Importe o serviço
import { ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core'; // Para observar múltiplos elementos, e AfterViewInit

@Component({
  selector: 'app-socioford',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './socioford.component.html',
  styleUrls: ['./socioford.component.css']
})
export class SociofordComponent implements OnInit, AfterViewInit{

  constructor(private router: Router, private animationService: AnimationService) { }
  @ViewChildren('animatedSection') animatedSections!: QueryList<ElementRef>; 

  ngOnInit(): void {
    // Nada específico aqui, animações no ngAfterViewInit
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
}