import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    component: UsuarioComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'user',
    component: UsuarioComponent
  },
  {
    path: 'usuario',
    component: UsuarioComponent
  },
  {
    path: 'miusuario',
    component: UsuarioComponent
  },
  {
    path: 'mi-usuario',
    component: UsuarioComponent
  },
  {
    path: 'mi_usuario',
    component: UsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
