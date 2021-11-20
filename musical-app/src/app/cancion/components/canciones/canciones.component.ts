import { HttpClient } from '@angular/common/http';
import { Component, OnInit, DoCheck } from '@angular/core';

import { Cancion } from './../../../core/models/cancion.model';
import { CancionesService } from 'src/app/core/services/canciones/canciones.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.scss']
})
export class CancionesComponent implements DoCheck, OnInit {


  canciones: Cancion[] = [];
  filtro_nombre: string;

  constructor(
    private cancionesService: CancionesService,
    private route: Router
  ) {
    this.filtro_nombre = "";
  }


  ngOnInit(): void {
    console.log("Usuario sess userName: " + window.sessionStorage["userName"]);
    const sessionUserName = window.sessionStorage["userName"];
    if (sessionUserName.length < 1) {
      this.route.navigate(['/usuario/login']);
    }
    else {
      this.fetchCanciones();
      // console.log("luego de this.fetchCanciones();");
    }

  }

  ngDoCheck() {
    this.filtro_nombre = (<HTMLInputElement>document.getElementById("filtroCards")).value;
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