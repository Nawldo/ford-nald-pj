// 1. Importe o Component e o CommonModule
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselHomeComponent } from "../../carousel-home-component/carousel-home-component.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CarouselHomeComponent
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { }


