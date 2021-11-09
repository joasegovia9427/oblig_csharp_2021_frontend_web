import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListaBandaComponent } from './components/lista-banda/lista-banda.component';
import { ListaAlbumComponent } from './components/lista-album/lista-album.component';
import { ListaCancionComponent } from './components/lista-cancion/lista-cancion.component';
import { ListaCantanteComponent } from './components/lista-cantante/lista-cantante.component';
import { LoginComponent } from './components/login/login.component';

import { BandaComponent } from './components/banda/banda.component';


const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'bandas',
    component: ListaBandaComponent
  },
  {
    path: 'albumes',
    component: ListaAlbumComponent
  },
  {
    path: 'canciones',
    component: ListaCancionComponent
  },
  {
    path: 'cantantes',
    component: ListaCantanteComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
