import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuHorizontalComponent } from './menu-horizontal/menu-horizontal.component';
import { ExponentialPipe } from './exponential.pipe';
import { HighlightDirective } from './highlight.directive';
import { AlbumesComponent } from './albumes/albumes.component';
import { BandaComponent } from './banda/banda.component';
import { BandasComponent } from './bandas/bandas.component';



@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LoginComponent,
    RegistroComponent,
    InicioComponent,
    MenuHorizontalComponent,
    ExponentialPipe,
    HighlightDirective,
    AlbumesComponent,
    BandaComponent,
    BandasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      //{ path: '', component: InicioComponent },
      { path: '', component: InicioComponent },
      { path: 'login', component: LoginComponent },
      { path: 'registro', component: RegistroComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
