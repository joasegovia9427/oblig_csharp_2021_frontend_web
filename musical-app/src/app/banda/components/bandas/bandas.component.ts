import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Banda } from './../../../core/models/banda.model';
import { BandasService } from 'src/app/core/services/bandas/bandas.service';

@Component({
  selector: 'app-bandas',
  templateUrl: './bandas.component.html',
  styleUrls: ['./bandas.component.scss']
})
export class BandasComponent implements OnInit {


  bandas: Banda[] = [];

  constructor(
    private bandasService: BandasService
  ) {
    //console.log("constructor bandas bandas.count" + this.bandas.length);
    /* for (const banda of this.bandas) {
      console.log("banda id:: " + banda.id);
    } */

  }


  ngOnInit(): void {
    this.fetchBandas();
  }

  outPut_BandaVerDetalle(id: string) {
    console.log('en file bandas.component.ts, lo que capture desde lo profundo ' + id)

  }

  fetchBandas() {
    this.bandasService.getAllBandas()
      .subscribe(bandas => {
        this.bandas = bandas;
      })
  }

  /*  fetchTest() {
      this.bandasService.getTest()
        .subscribe(prueba => {
          console.log(prueba);
        })
   } */

}
