import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
  value = 'Clear me';
  
  num1: number = 0;
  num2: number = 0;
  resultado : number = 0;
  operacionSeleccionada: string = 'Suma';
  tipoOperaciones: string[] = [
    'Suma',
    'Resta',
    'Multiplicación',
    'División'
  ]

  calcular(){
    switch (this.operacionSeleccionada) {
      case 'Suma':
        this.resultado = this.num1 + this.num2
        break;
      case 'Resta':
        this.resultado = this.num1 - this.num2
        break;
      case 'Multiplicación':
        this.resultado = this.num1 * this.num2
        break;
      case 'División':
        if (this.num2 != 0) {
          this.resultado = this.num1 / this.num2
          return;
        }
        this.resultado = NaN;
        break;
      default:
        break;
    }
  }
}
