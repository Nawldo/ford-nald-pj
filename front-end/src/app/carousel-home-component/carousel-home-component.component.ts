import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe CommonModule para usar @for, @if
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap'; // Importe NgbCarouselModule

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
        src: 'assets/img/a-ford.jpg', // Crie essa pasta e coloque suas imagens
        alt: 'Ford: Presente, Passado e Futuro',
        text: 'A Ford'
      },
      {
        src: 'assets/img/pode.jpg',
        alt: 'Ford e a Diversidade',
        text: 'Conectando pessoas, construindo um futuro inclusivo.'
      },
      {
        src: 'assets/img/muito.jpg',
        alt: 'Ford e o Engajamento Social',
        text: 'Caminhos que se cruzam, histórias que se encontram.'
      },
      {
        src: 'assets/img/e-juntos.jpg',
        alt: 'Ford e o Meio Ambiente',
        text: 'Inovação que move o mundo de forma sustentável.'
      },
      {
        src: 'assets/img/podemos.jpg',
        alt: 'Ford e o Planeta',
        text: 'Dirigindo rumo a um futuro mais verde.'
      },
      {
        src: 'assets/img/tudo.jpg',
        alt: 'Ford e o Planeta',
        text: 'Dirigindo rumo a um futuro mais verde.'
      }
    ];
  }
}

// Opcional: Defina uma interface para a tipagem das suas imagens
interface CarouselImage {
  src: string;
  alt: string;
  text: string;
}
