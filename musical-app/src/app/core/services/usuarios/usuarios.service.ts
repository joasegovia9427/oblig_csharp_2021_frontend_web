import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Usuario } from '../../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url: string;
  params: string;
  usuario: Usuario;

  constructor(
    private http: HttpClient
  ) { }


  // getAllBandas() {
  //   this.url = environment.url_api + '/bandas/listado';
  //   console.log(this.url);
  //   return this.http.get<Banda[]>(this.url);
  // }

  // getBanda(id: string) {
  //   this.url = environment.url_api + '/bandas/obtener/' + id;
  //   return this.http.get<Banda>(this.url);
  // }

  crearUsuario(newUsuario) {
    this.url = environment.url_api + '/usuarios/alta/'
    console.log(this.url + newUsuario);
    return this.http.post(this.url, newUsuario);
  }

  //https://localhost:44378/api/usuarios/login?username=user123&password=12345
  iniciarSesionUsuario(nombreUsuario, contraseniaUsuario) {
    this.url = environment.url_api + '/usuarios/login?username=' + nombreUsuario + '&password=' + contraseniaUsuario;
    console.log(this.url);
    return this.http.post(this.url, '');
  }

  obtenerIdUsuariosByNombreUsuario(nombreUsuario) {
    this.url = environment.url_api + '/usuarios/identificador/' + nombreUsuario;
    console.log(this.url);
    return this.http.get<number>(this.url);
  }

  obtenerDatosUsuarioByIdUsuario(idUsuario) {
    this.url = environment.url_api + '/usuarios/obtener/' + idUsuario;
    console.log(this.url);
    return this.http.get<Usuario>(this.url);
  }


}