import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancionDetailComponent } from './components/cancion-detail/cancion-detail.component';
import { CancionesComponent } from './components/canciones/canciones.component';

const routes: Routes = [
    {
        path: '',
        component: CancionesComponent
    },
    {
        path: ':id',  //path: 'Cancion/:id',
        component: CancionDetailComponent
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
export class CancionRoutingModule { }