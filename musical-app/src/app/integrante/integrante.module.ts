import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IntegranteComponent } from './components/integrante/integrante.component';
import { IntegrantesComponent } from './components/integrantes/integrantes.component';
import { IntegranteDetailComponent } from './components/integrante-detail/integrante-detail.component';

import { IntegranteRoutingModule } from './integrante-routing.module';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';


@NgModule({
  declarations: [
    IntegranteComponent,
    IntegrantesComponent,
    IntegranteDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    IntegranteRoutingModule,
    MaterialModule,
  ]
})
export class IntegranteModule { }
