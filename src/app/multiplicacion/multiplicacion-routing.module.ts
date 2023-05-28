import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultiplicacionPage } from './multiplicacion.page';

const routes: Routes = [
  {
    path: '',
    component: MultiplicacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultiplicacionPageRoutingModule {}
