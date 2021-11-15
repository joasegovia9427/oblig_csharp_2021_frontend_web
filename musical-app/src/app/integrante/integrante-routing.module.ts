import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntegranteDetailComponent } from './components/integrante-detail/integrante-detail.component';
import { IntegrantesComponent } from '../integrante/components/integrantes/integrantes.component';

const routes: Routes = [
  {
    path: '',
    component: IntegrantesComponent
  },
  {
    path: ':id',  //path: 'Album/:id',
    component: IntegranteDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntegranteRoutingModule { }
