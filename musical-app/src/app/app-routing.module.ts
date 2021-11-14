import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './admin.guard';

//proximos a modularizar
import { AlbumesComponent } from './albumes/albumes.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      /* {
        path: 'inicio',
        //canActivate: [AdminGuard], //si quisera generar seguridad en esta pantalla, le pongo esta etiqueta
        redirectTo: '/home',
        pathMatch: 'full'
      }, */
      {
        path: 'home',
        //component: HomeComponent
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'bandas',
        loadChildren: () => import('./banda/banda.module').then(m => m.BandaModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./banda/banda.module').then(m => m.BandaModule)
      },
      {
        path: 'albumes',
        component: AlbumesComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
