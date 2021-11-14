import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BandaDetailComponent } from './components/banda-detail/banda-detail.component';
import { BandasComponent } from './components/bandas/bandas.component';

const routes: Routes = [
    {
        path: '',
        component: BandasComponent
    },
    {
        path: ':id',  //path: 'bandas/:id',
        component: BandaDetailComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class BandaRoutingModule { }
