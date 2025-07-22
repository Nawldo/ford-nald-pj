// C:/dev/ford-nald-pf/front-end/src/app/carousel-home-component/carousel-home-component.component.ts
import { Component, OnInit } from '@angular/core'; // Removido AfterViewInit e ElementRef
import { CommonModule } from '@angular/common';

// Removida a declaração: declare const bootstrap: any;

interface CarouselImage {
  src: string;
  alt: string;
  text: string;
}

@Component({
  selector: 'app-carousel-home',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './carousel-home-component.component.html',
  styleUrls: ['./carousel-home-component.component.css']
})
export class CarouselHomeComponent implements OnInit { // Removida a implementação de AfterViewInit
  images: CarouselImage[] = [];

  constructor() { } // Removida a injeção de ElementRef

  ngOnInit(): void {
    // SUAS IMAGENS E FRASES NA ORDEM CORRETA
    this.images = [
      {
        src: 'assets/img/ford-a.jpg',
        alt: 'Ford: Presente, Passado e Futuro',
        text: 'Ford ontem, hoje e sempre!'
      },
      {
        src: 'assets/img/chegar.jpg',
        alt: 'Ford e a aventura',
        text: 'Caminhos que se cruzam, histórias que se encontram.'
      },
      {
        src: 'assets/img/inova-verde.jpg',
        alt: 'Ford e o Engajamento Social',
        text:'Inovação que move o mundo de forma sustentável.'
      },
      {
        src: 'assets/img/gente.jpg',
        alt: 'Ford e o Meio Ambiente',
        text:'Conectando pessoas, construindo um futuro inclusivo..'
      },
      {
        src: 'assets/img/preserva.jpg',
        alt: 'Ford e o Planeta',
        text:'Dirigindo rumo a um futuro mais verde.'
      },
      {
        src: 'assets/img/terra.jpg',
        alt: 'Ford e o Planeta',
        text:'A Ford pode MUITO e juntos podemos TUDO!.'
      }
    ];
  }

  // Removido completamente o método ngAfterViewInit()
}