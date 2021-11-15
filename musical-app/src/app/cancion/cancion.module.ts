import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CancionComponent } from './components/cancion/cancion.component';
import { CancionDetailComponent } from './components/cancion-detail/cancion-detail.component';
import { CancionesComponent } from './components/canciones/canciones.component';

import { CancionRoutingModule } from './cancion-routing.module';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';



@NgModule({
  declarations: [
    CancionComponent,
    CancionDetailComponent,
    CancionesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CancionRoutingModule,
    MaterialModule
  ]
})
export class CancionModule {

}
