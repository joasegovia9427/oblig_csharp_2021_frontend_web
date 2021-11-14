//import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Banda } from '../../models/banda.model';

@Injectable({
  providedIn: 'root'
})
export class BandasService {

  constructor(
    private http: HttpClient
  ) { }



  getAllBandas() {
    return this.http.get<Banda[]>('https://localhost:44378/api/bandas/listado');
  }

  getBanda(id: string) {
    return this.http.get<Banda>(`https://localhost:44378/api/bandas/obtener/${id}`);
  }

}
