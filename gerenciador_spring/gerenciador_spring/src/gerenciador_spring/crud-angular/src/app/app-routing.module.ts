import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeiculoComponent } from './veiculo/veiculo.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
  path:'', component: VeiculoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
