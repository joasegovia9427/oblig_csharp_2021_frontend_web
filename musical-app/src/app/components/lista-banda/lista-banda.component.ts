import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Banda } from '../../core/models/banda.module';
/* import { Banda } from '../banda/banda.module'; */
import { BandasService } from '../../core/services/bandas/bandas.service'


@Component({
  selector: 'app-lista-banda',
  templateUrl: './lista-banda.component.html',
  styleUrls: ['./lista-banda.component.scss']
})
export class ListaBandaComponent implements OnInit {


  bandas: Banda[] = [];

  prueba: string;

  constructor(
    private bandasService: BandasService
  ) {


  }

  ngOnInit(): void {
    this.fetchTest();
    //this.fetchBandas();

  }


  outPut_BandaVerDetalle(id: string) {
    console.log('id desde dentro ' + id)

  }

  fetchBandas() {
    this.bandasService.getAllBandas()
      .subscribe(bandas => {
        console.log(bandas);
      })
  }

  fetchTest() {
    this.bandasService.getTest()
      .subscribe(prueba => {
        console.log(prueba);
      })
  }

}



