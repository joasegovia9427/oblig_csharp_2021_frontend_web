import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Banda } from '../../models/banda.module';

@Injectable({
    providedIn: 'root'
})
export class BandasService {

    constructor(
        private http: HttpClient
    ) { }

    getAllBandas() {
        return this.http.get<Banda[]>('https://localhost:44378/api/generos/listado');
    }


    getTest() {
        return this.http.get<string>('https://localhost:44378/api/bandas/test');
    }


    getBanda(id: string) {
        return this.http.get(`https://localhost:44378/api/bandas/obtener/${id}`);
    }
}