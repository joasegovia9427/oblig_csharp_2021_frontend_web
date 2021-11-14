import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';

import { Banda } from '../../models/banda.model';

@Injectable({
  providedIn: 'root'
})
export class BandasService {

  bandas: Banda[] = [
    {
      id: "1",
      genero: "rock&roll from service",
      nombre: 'Stones',
      anoCreacion: 1000,
      anoSeparacion: 1021,
    },
    {
      id: "2",
      genero: "rock",
      nombre: 'Beatles',
      anoCreacion: 2000,
      anoSeparacion: 2021,
    }
  ];



  constructor() { }


  getAllBandas() {
    return this.bandas;
  }

  getBanda(id: string) {
    return this.bandas.find(item => id === item.id);
  }

}
