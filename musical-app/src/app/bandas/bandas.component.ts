import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Banda } from '../banda.model';

@Component({
  selector: 'app-bandas',
  templateUrl: './bandas.component.html',
  styleUrls: ['./bandas.component.scss']
})
export class BandasComponent implements OnInit {

  bandas: Banda[] = [
    {
      id: "1",
      genero: "rock",
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

  constructor(
    //private bandasService: BandasService
  ) {
    console.log("constructor bandas bandas.count" + this.bandas.length);
    /* for (const banda of this.bandas) {
      console.log("banda id:: " + banda.id);
    } */

  }


  ngOnInit(): void {
    //this.fetchTest();
    //this.fetchBandas();
  }

  outPut_BandaVerDetalle(id: string) {
    console.log('en file bandas.component.ts, lo que capture desde lo profundo ' + id)

  }

  /* fetchBandas() {
    this.bandasService.getAllBandas()
      .subscribe(bandas => {
        console.log(bandas);
      })
  } */

  /*  fetchTest() {
      this.bandasService.getTest()
        .subscribe(prueba => {
          console.log(prueba);
        })
   } */

}
