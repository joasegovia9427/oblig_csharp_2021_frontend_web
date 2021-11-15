import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Cancion } from './../../../core/models/cancion.model';
import { CancionesService } from 'src/app/core/services/canciones/canciones.service';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.scss']
})
export class CancionesComponent implements OnInit {


  canciones: Cancion[] = [];

  constructor(
    private cancionesService: CancionesService
  ) {
    //console.log("constructor bandas bandas.count" + this.bandas.length);
    /* for (const banda of this.bandas) {
      console.log("banda id:: " + banda.id);
    } */

  }


  ngOnInit(): void {
    this.fetchCanciones();
  }

  outPut_CancionVerDetalle(id: string) {
    console.log('en file canciones.component.ts, lo que capture desde lo profundo ' + id)

  }

  fetchCanciones() {
    this.cancionesService.getAllCanciones()
      .subscribe(canciones => {
        this.canciones = canciones;
      })
  }



}