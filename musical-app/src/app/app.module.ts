import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ListaAlbumComponent } from './lista-album/lista-album.component';
import { ListaBandaComponent } from './lista-banda/lista-banda.component';
import { ListaCancionComponent } from './lista-cancion/lista-cancion.component';
import { ListaCantanteComponent } from './lista-cantante/lista-cantante.component';
import { DetalleAlbumComponent } from './detalle-album/detalle-album.component';
import { DetalleBandaComponent } from './detalle-banda/detalle-banda.component';
import { DetalleCancionComponent } from './detalle-cancion/detalle-cancion.component';
import { DetalleCantanteComponent } from './detalle-cantante/detalle-cantante.component';
import { VotoBandaComponent } from './voto-banda/voto-banda.component';
import { VotoCancionComponent } from './voto-cancion/voto-cancion.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LoginComponent,
    RegistroComponent,
    ListaAlbumComponent,
    ListaBandaComponent,
    ListaCancionComponent,
    ListaCantanteComponent,
    DetalleAlbumComponent,
    DetalleBandaComponent,
    DetalleCancionComponent,
    DetalleCantanteComponent,
    VotoBandaComponent,
    VotoCancionComponent,
    InicioComponent,
    MenuLateralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: InicioComponent },
      { path: 'login', component: LoginComponent },
      { path: 'registro', component: RegistroComponent },
      { path: 'listaBanda', component: ListaBandaComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
