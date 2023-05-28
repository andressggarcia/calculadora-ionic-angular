import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'suma',
    loadChildren: () => import('./suma/suma.module').then( m => m.SumaPageModule)
  },
  {
    path: 'resta',
    loadChildren: () => import('./resta/resta.module').then( m => m.RestaPageModule)
  },
  {
    path: 'multiplicacion',
    loadChildren: () => import('./multiplicacion/multiplicacion.module').then( m => m.MultiplicacionPageModule)
  },
  {
    path: 'division',
    loadChildren: () => import('./division/division.module').then( m => m.DivisionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
