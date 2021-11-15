import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { IntegrantesService } from 'src/app/core/services/integrantes/integrantes.service';
import { Integrante } from 'src/app/core/models/integrante.model';
import { Persona } from 'src/app/core/models/persona.model';
import { BandasService } from '../../../core/services/bandas/bandas.service';
import { Banda } from '../../../core/models/banda.model';

@Component({
  selector: 'app-integrante-detail',
  templateUrl: './integrante-detail.component.html',
  styleUrls: ['./integrante-detail.component.scss']
})
export class IntegranteDetailComponent implements OnInit {

  integrante: Integrante;
  persona: Persona;
  banda: Banda;

  constructor(
    private route: ActivatedRoute,
    private integrantesService: IntegrantesService,
    private bandasService: BandasService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchIntegrante(id);
    });

  }

  fetchIntegrante(id: string) {
    this.integrantesService.getIntegrante(id).subscribe(integrante => {
      this.integrante = integrante;
      console.log("datos obtenidos de la integrante:" + integrante);
    })
  }


}
