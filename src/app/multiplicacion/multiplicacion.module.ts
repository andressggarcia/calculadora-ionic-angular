import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultiplicacionPageRoutingModule } from './multiplicacion-routing.module';

import { MultiplicacionPage } from './multiplicacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultiplicacionPageRoutingModule
  ],
  declarations: [MultiplicacionPage]
})
export class MultiplicacionPageModule {}
