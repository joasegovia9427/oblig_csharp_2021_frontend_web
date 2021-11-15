import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { CancionesService } from '../../../core/services/canciones/canciones.service';

import { MatRadioChange } from '@angular/material/radio';
import { Resenia } from '../../../core/models/resenia.model'
import { Cancion } from 'src/app/core/models/cancion.model';


@Component({
  selector: 'app-cancion-detail',
  templateUrl: './cancion-detail.component.html',
  styleUrls: ['./cancion-detail.component.scss']
})
export class CancionDetailComponent implements OnInit {
  Id: Number;
  cancion: Cancion;
  voto: number;

  constructor(
    private route: ActivatedRoute,
    private cancioneService: CancionesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchCancion(id)
    });
  }

  fetchCancion(id: Number) {
    this.cancioneService.getCancion(id).subscribe(cancion => {
      this.cancion = cancion;
      // this.integrantes = banda.Integrantes.length;

      console.log("datos obtenidos de la banda:" + cancion.Nombre);
    })

  }

  enviarResenia(reseniaTexto: string) {

    const newResenia: Resenia = {
      Id: 0,
      Puntaje: this.voto,
      Resenia: reseniaTexto,
      BandaId: 0,
      CancionId: this.cancion.Id,
      UsuarioId: 1,
    }
    console.log(newResenia);
    this.cancioneService.enviarReseniaCancion(newResenia).subscribe(respuesta => { console.log(respuesta) })
  }

  radioChange(event: MatRadioChange, data: number) {
    this.voto = data;
  }

}
