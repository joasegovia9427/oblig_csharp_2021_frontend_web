import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ListaAlbumComponent } from './components/lista-album/lista-album.component';
/* import { ListaBandaComponent } from './components/lista-banda/lista-banda.component'; */

import { ListaCancionComponent } from './components/lista-cancion/lista-cancion.component';
import { ListaCantanteComponent } from './components/lista-cantante/lista-cantante.component';
import { DetalleAlbumComponent } from './components/detalle-album/detalle-album.component';
import { DetalleBandaComponent } from './components/detalle-banda/detalle-banda.component';
import { DetalleCancionComponent } from './components/detalle-cancion/detalle-cancion.component';
import { DetalleCantanteComponent } from './components/detalle-cantante/detalle-cantante.component';
import { VotoBandaComponent } from './components/voto-banda/voto-banda.component';
import { VotoCancionComponent } from './components/voto-cancion/voto-cancion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';


import { BandaComponent } from './components/banda/banda.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LoginComponent,
    RegistroComponent,
    ListaAlbumComponent,
    ListaCancionComponent,
    ListaCantanteComponent,
    DetalleAlbumComponent,
    DetalleBandaComponent,
    DetalleCancionComponent,
    DetalleCantanteComponent,
    VotoBandaComponent,
    VotoCancionComponent,
    InicioComponent,
    MenuLateralComponent,
    BandaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      //{ path: '', component: InicioComponent },
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'registro', component: RegistroComponent },
      { path: 'listaBanda', component: LoginComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
