import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.page.html',
  styleUrls: ['./division.page.scss'],
})
export class DivisionPage implements OnInit {

  operandoA: number = 0
  operandoB: number = 0
  resultado: number = 0

  dividir():void{
    this.resultado = this.operandoA / this.operandoB;
  }

  constructor() { }

  ngOnInit() {
  }

}
