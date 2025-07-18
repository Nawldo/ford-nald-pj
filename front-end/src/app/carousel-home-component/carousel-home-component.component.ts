import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel-home',
  templateUrl: './carousel-home-component.component.html', // Caminho corrigido
  styleUrls: ['./carousel-home-component.component.css'],   // Caminho corrigido
  standalone: true,
  imports: [NgbModule, CommonModule]
})
export class CarouselHomeComponent implements OnInit {

  // Inicialize o array 'images' corretamente com os dados ou como um array vazio
  images = ;

  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = false;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
  }
}
