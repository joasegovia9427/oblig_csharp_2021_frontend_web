//import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {
  HttpClient, HttpHeaders, HttpClientModule, HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { Banda } from '../../models/banda.model';
import { environment } from 'src/environments/environment';
import { Resenia } from '../../models/resenia.model';

@Injectable({
  providedIn: 'root'
})
export class BandasService {

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


  getAllBandas() {
    this.url = environment.url_api + '/bandas/listado';
    console.log(this.url);
    return this.http.get<Banda[]>(this.url);
  }

  getBanda(id: string) {
    this.url = environment.url_api + '/bandas/obtener/' + id;
    return this.http.get<Banda>(this.url);
  }

  enviarResenia(newResenia) {
    this.url = environment.url_api + '/resenias/alta/'
    console.log(this.url + newResenia);
    return this.http.post(this.url, newResenia);
  }

}
