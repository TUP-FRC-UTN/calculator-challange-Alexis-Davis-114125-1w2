import { Component } from '@angular/core';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  valor1: number = 0;
  valor2: number = 0;
  resultado: number = 0;
  operacion: string = '';

  calcular(operacion: string) {
    switch (operacion) {
      case '+':
        this.resultado = this.valor1 + this.valor2;
        break;
      case '-':
        this.resultado = this.valor1 - this.valor2;
        break;
      case '*':
        this.resultado = this.valor1 * this.valor2;
        break;
      case '/':
        if (this.valor2 !== 0) {
          this.resultado = this.valor1 / this.valor2;
        } else {
          alert('Division por cero no permitida');
        }
        break;
      case '^':
        this.resultado = Math.pow(this.valor1, this.valor2);
        break;
      case 'c':
        this.valor1 = 0;
        this.valor2 = 0;
        this.resultado = 0;
        break;
    }
  }
}