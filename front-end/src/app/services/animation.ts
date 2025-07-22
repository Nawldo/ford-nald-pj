import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor() { }

  /**
   * Observa um elemento e adiciona classes de animação quando ele entra na viewport.
   * @param elementRef O ElementRef do elemento a ser observado.
   * @param animationClass A classe de animação do Animate.css (ex: 'animate__fadeInUp').
   * @param delay Opcional: a classe de delay do Animate.css (ex: 'animate__delay-1s').
   */
  observeElementForAnimation(elementRef: ElementRef, animationClass: string, delayClass: string = ''): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Se o elemento está visível, adiciona as classes de animação
          entry.target.classList.add('animate__animated', animationClass);
          if (delayClass) {
            entry.target.classList.add(delayClass);
          }
          // Para que a animação ocorra apenas uma vez
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2 // A animação dispara quando 20% do elemento está visível
    });

    observer.observe(elementRef.nativeElement);
  }
}
