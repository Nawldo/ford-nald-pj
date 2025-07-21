import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-home',
  standalone: true,
  imports: [
    CommonModule, // Necessário para @for, @if
    NgbCarouselModule // Necessário para ngb-carousel
  ],
  templateUrl: './carousel-home-component.component.html',
  styleUrls: ['./carousel-home-component.component.css']
})
export class CarouselHomeComponent implements OnInit {

  images: CarouselImage[] = []; // Defina o tipo da sua array de imagens

  ngOnInit(): void {
    // Simulando dados que viriam de uma API
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
}

// Opcional: Defina uma interface para a tipagem das imagens
interface CarouselImage {
  src: string;
  alt: string;
  text: string;
}
