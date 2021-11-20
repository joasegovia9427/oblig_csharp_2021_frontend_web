import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BandaComponent } from './components/banda/banda.component';
import { BandaDetailComponent } from './components/banda-detail/banda-detail.component';
import { BandasComponent } from './components/bandas/bandas.component';

import { BandaRoutingModule } from './banda-routing.module';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';


@NgModule({
    declarations: [
        BandaComponent,
        BandaDetailComponent,
        BandasComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        BandaRoutingModule,
        MaterialModule
    ]
})
export class BandaModule {

}
