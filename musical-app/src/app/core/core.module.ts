import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BandasService } from './services/bandas/bandas.service';
import { AlbumesService } from './services/albumes/albumes.service';
import { IntegrantesService } from './services/integrantes/integrantes.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    BandasService,
    AlbumesService,
    IntegrantesService
  ]
})
export class CoreModule { }
