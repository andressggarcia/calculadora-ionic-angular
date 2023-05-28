import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resta',
  templateUrl: './resta.page.html',
  styleUrls: ['./resta.page.scss'],
})
export class RestaPage implements OnInit {

  operandoA: number = 0
  operandoB: number = 0
  resultado: number = 0

  resta():void{
    this.resultado = this.operandoA - this.operandoB;
  }

  constructor() { }

  ngOnInit() {
  }

}
