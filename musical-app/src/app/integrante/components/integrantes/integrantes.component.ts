import { Component, OnInit, DoCheck } from '@angular/core';

import { Integrante } from 'src/app/core/models/integrante.model';
import { IntegrantesService } from 'src/app/core/services/integrantes/integrantes.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.scss']
})
export class IntegrantesComponent implements DoCheck, OnInit {

  integrantes: Integrante[] = [];
  filtro_nombre: string;

  constructor(
    private integrantesService: IntegrantesService,
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
      this.fetchIntegrantes();
    }


  }

  ngDoCheck() {
    this.filtro_nombre = (<HTMLInputElement>document.getElementById("filtroCards")).value;
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
