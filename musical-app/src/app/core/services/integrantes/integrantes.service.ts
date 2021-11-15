import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Integrante } from '../../models/integrante.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class IntegrantesService {

  url: string;

  constructor(
    private http: HttpClient
  ) { }

  getAllIntegrantes() {
    this.url = environment.url_api + '/integrantes/listado';
    return this.http.get<Integrante[]>(this.url);
  }

  getIntegrante(id: string) {
    this.url = environment.url_api + '/integrantes/obtener/' + id;
    return this.http.get<Integrante>(this.url);
  }


}
