import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-socioford',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './socioford.component.html',
  styleUrls: ['./socioford.component.css']
})
export class SociofordComponent {

  constructor(private router: Router) { }

  goToHome(): void {
    this.router.navigate(['/home']);
  }
}