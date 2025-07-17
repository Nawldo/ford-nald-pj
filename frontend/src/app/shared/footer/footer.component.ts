import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'] // corrigi 'styleUrl' para 'styleUrls' também!
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}
