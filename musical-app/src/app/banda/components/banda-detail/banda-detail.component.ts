import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { BandasService } from '../../../core/services/bandas/bandas.service';
import { Banda } from '../../../core/models/banda.model';
import { Integrante } from '../../../core/models/integrante.model';
import { MatRadioChange } from '@angular/material/radio';
import { Resenia } from '../../../core/models/resenia.model'


@Component({
  selector: 'app-banda-detail',
  templateUrl: './banda-detail.component.html',
  styleUrls: ['./banda-detail.component.scss']
})
export class BandaDetailComponent implements OnInit {

  banda: Banda;
  integrantes: Integrante;
  voto: number;

  constructor(
    private route: ActivatedRoute,
    private bandasService: BandasService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchBanda(id)
    });
  }

  fetchBanda(id: string) {
    this.bandasService.getBanda(id).subscribe(banda => {
      this.banda = banda;
      // this.integrantes = banda.Integrantes.length;
      console.log(banda.Integrantes.length);
      console.log("datos obtenidos de la banda:" + banda);
    })

  }

  enviarResenia(reseniaTexto: string) {
    const newResenia: Resenia = {
      Id: 0,
      Puntaje: this.voto,
      Resenia: reseniaTexto,
      BandaId: this.banda.Id,
      CancionId: 0,
      UsuarioId: 1,
    }

    this.bandasService.enviarResenia(newResenia).subscribe(respuesta => { console.log(respuesta) })
  }

  radioChange(event: MatRadioChange, data: number) {
    this.voto = data;
  }

}
