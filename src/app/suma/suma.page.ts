import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.page.html',
  styleUrls: ['./suma.page.scss'],
})
export class SumaPage implements OnInit {

  operandoA: number = 0
  operandoB: number = 0
  resultado: number = 0

  sumar():void{
    this.resultado = this.operandoA + this.operandoB;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
