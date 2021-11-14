import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { MenuHorizontalComponent } from './menu-horizontal/menu-horizontal.component';
import { AlbumesComponent } from './albumes/albumes.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TopBarComponent,
    LoginComponent,
    RegistroComponent,
    MenuHorizontalComponent,
    AlbumesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    /* RouterModule.forRoot([
      //{ path: '', component: InicioComponent },
      //{ path: '', component: InicioComponent },
      //{ path: 'login', component: LoginComponent },
      //{ path: 'registro', component: RegistroComponent },
    ]), */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
