//import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {
  HttpClient, HttpHeaders
} from '@angular/common/http';

import { Cancion } from '../../models/cancion.model';
import { environment } from 'src/environments/environment';
import { Resenia } from '../../models/resenia.model';

@Injectable({
  providedIn: 'root'
})
export class CancionesService {

  url: string;
  params: string;
  resenia: Resenia;

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'authkey',
      'userid': '1'
    })
  };

  constructor(
    private http: HttpClient
  ) { }



  getAllCanciones() {
    this.url = environment.url_api + '/canciones/listado';
    console.log(this.url);
    return this.http.get<Cancion[]>(this.url);
  }

  getCancion(id: Number) {
    this.url = environment.url_api + '/canciones/obtener/' + id;
    return this.http.get<Cancion>(this.url);
  }

  enviarReseniaCancion(newResenia) {
    this.url = environment.url_api + '/resenias/alta/'
    console.log(this.url + newResenia);
    return this.http.post(this.url, newResenia);
  }

}