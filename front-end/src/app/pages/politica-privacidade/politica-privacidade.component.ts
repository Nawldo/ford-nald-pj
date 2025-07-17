import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-politica-privacidade',
  standalone: true,
  templateUrl: './politica-privacidade.component.html',
  styleUrls: ['./politica-privacidade.component.css']
})
export class PoliticaPrivacidadeComponent {
  @Output() voltar = new EventEmitter<void>();

  emitirVoltar() {
    this.voltar.emit();
  }
}

