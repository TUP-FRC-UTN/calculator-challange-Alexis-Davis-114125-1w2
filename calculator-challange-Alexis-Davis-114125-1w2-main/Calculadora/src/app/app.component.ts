import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculadora';
  result: number = 0;

  calcular(operation: string) {
    const input1 = parseFloat((<HTMLInputElement>document.getElementById('input1')).value);
    const input2 = parseFloat((<HTMLInputElement>document.getElementById('input2')).value);

    switch (operation) {
      case '+':
        this.result = input1 + input2;
        break;
      case '-':
        this.result = input1 - input2;
        break;
      case '*':
        this.result = input1 * input2;
        break;
      case '/':
        this.result = input2 !== 0 ? input1 / input2 : 0;
        break;
      case '^':
        this.result = Math.pow(input1, input2);
        break;
      case 'c':
        this.result = 0;
        (<HTMLInputElement>document.getElementById('input1')).value = '';
        (<HTMLInputElement>document.getElementById('input2')).value = '';
        break;
      default:
        break;
    }
  }
}