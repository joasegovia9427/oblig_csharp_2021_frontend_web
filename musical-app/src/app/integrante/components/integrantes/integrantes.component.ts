import { Component, OnInit } from '@angular/core';

import { Integrante } from 'src/app/core/models/integrante.model';
import { IntegrantesService } from 'src/app/core/services/integrantes/integrantes.service';

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.scss']
})
export class IntegrantesComponent implements OnInit {

  integrantes: Integrante[] = [];

  constructor(
    private integrantesService: IntegrantesService
  ) { }

  ngOnInit(): void {
    this.fetchIntegrantes();
  }

  outPut_IntegranteVerDetalle(id: string) {
    console.log('en file integrante.component.ts, lo que capture desde lo profundo ' + id)
  }

  fetchIntegrantes() {
    this.integrantesService.getAllIntegrantes()
      .subscribe(integrantes => {
        this.integrantes = integrantes;
        console.log(this.integrantes)
      })
  }

}
