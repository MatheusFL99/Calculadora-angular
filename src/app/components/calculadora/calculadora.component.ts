import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  inputDisplay!: string;
  simbs = ['+', '-', '/', '*'];
  cont = 0;

  constructor() {}

  ngOnInit(): void {
    this.inputDisplay = '';
  }

  inserirNumero(num: string) {
    if (this.cont > 0) {
      this.inputDisplay = '';
    }
    this.inputDisplay += num;
    this.cont = 0;
    console.log(this.inputDisplay);
  }

  inserirSimbolo(simb: string) {
    let a = this.inputDisplay[this.inputDisplay.length - 1];
    if (a != '+' && a != '-' && a != '/' && a != '*') {
      this.inputDisplay += simb;
      this.cont = 0;
    }

    console.log(this.inputDisplay);
  }

  limpar() {
    this.inputDisplay = '';
  }

  apagar() {
    if (this.cont == 0) {
      this.inputDisplay = this.inputDisplay.substring(
        0,
        this.inputDisplay.length - 1
      );
    }
  }

  calcular() {
    var resultado = this.inputDisplay;
    if (resultado) {
      this.inputDisplay = eval(resultado);
    }
    this.cont++;
  }
}
