import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { AlbumComponent } from './components/album/album.component';
import { AlbumesComponent } from './components/albumes/albumes.component';

import { AlbumRoutingModule } from './album-routing.module';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';


@NgModule({
  declarations: [
    AlbumDetailComponent,
    AlbumComponent,
    AlbumesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AlbumRoutingModule,
    MaterialModule,
  ]
})
export class AlbumModule { }
