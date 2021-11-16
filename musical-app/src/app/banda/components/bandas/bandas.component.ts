import { HttpClient } from '@angular/common/http';
import { Component, OnInit, DoCheck } from '@angular/core';

import { Banda } from './../../../core/models/banda.model';
import { BandasService } from 'src/app/core/services/bandas/bandas.service';

@Component({
  selector: 'app-bandas',
  templateUrl: './bandas.component.html',
  styleUrls: ['./bandas.component.scss']
})
export class BandasComponent implements DoCheck, OnInit {

  bandas: Banda[] = [];
  filtro_nombre: string;


  ////https://www.cloudhadoop.com/angular-get-input-value-multiple-ways/

  constructor(
    private bandasService: BandasService
  ) {
    this.filtro_nombre = "";
  }

  ngOnInit(): void {
    this.fetchBandas();
  }

  ngDoCheck() {
    this.filtro_nombre = (<HTMLInputElement>document.getElementById("filtroCards")).value;
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

}
