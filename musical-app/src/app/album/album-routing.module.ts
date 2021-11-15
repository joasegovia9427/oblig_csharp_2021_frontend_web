import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { AlbumesComponent } from './components/albumes/albumes.component';

const routes: Routes = [
    {
        path: '',
        component: AlbumesComponent
    },
    {
        path: ':id',  //path: 'Album/:id',
        component: AlbumDetailComponent
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
export class AlbumRoutingModule { }
