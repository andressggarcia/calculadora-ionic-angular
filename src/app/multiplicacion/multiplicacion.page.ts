import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplicacion',
  templateUrl: './multiplicacion.page.html',
  styleUrls: ['./multiplicacion.page.scss'],
})
export class MultiplicacionPage implements OnInit {

  operandoA: number = 0
  operandoB: number = 0
  resultado: number = 0

  multiplicar():void{
    this.resultado = this.operandoA * this.operandoB;
  }

  constructor() { }

  ngOnInit() {
  }

}
