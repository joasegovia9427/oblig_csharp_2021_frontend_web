import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './admin.guard';

import { AboutUsComponent } from './shared/components/about-us/about-us.component';

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
        path: 'albumes',
        loadChildren: () => import('./album/album.module').then(m => m.AlbumModule)
      },
      {
        path: 'cantantes',
        loadChildren: () => import('./integrante/integrante.module').then(m => m.IntegranteModule)
      },
      {
        path: 'integrantes',
        loadChildren: () => import('./integrante/integrante.module').then(m => m.IntegranteModule)
      },
      {
        path: 'canciones',
        loadChildren: () => import('./cancion/cancion.module').then(m => m.CancionModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./banda/banda.module').then(m => m.BandaModule)
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: 'usuario',
        loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)
      },
    ]
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)
  // },

  // {
  //   path: 'user',
  //   loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)
  // },
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
