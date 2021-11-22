import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { BandasService } from '../../../core/services/bandas/bandas.service';
import { Banda } from '../../../core/models/banda.model';
import { Integrante } from '../../../core/models/integrante.model';
import { MatRadioChange } from '@angular/material/radio';
import { Resenia } from '../../../core/models/resenia.model'

import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banda-detail',
  templateUrl: './banda-detail.component.html',
  styleUrls: ['./banda-detail.component.scss']
})
export class BandaDetailComponent implements OnInit {

  hideMsgError = false;
  hideMsgSuccess = false;
  banda: Banda;
  integrantes: Integrante;
  voto: number;
  integrantesLista: Integrante[];

  constructor(
    private routeOwn: ActivatedRoute,
    private bandasService: BandasService,
    private route: Router
  ) { }

  ngOnInit(): void {
    console.log("sess userName: " + window.sessionStorage["userName"]);
    const sessionUserName = window.sessionStorage["userName"];
    if (sessionUserName.length < 1) {
      this.route.navigate(['/usuario/login']);
    }
    else {
      this.routeOwn.params.subscribe((params: Params) => {
        const id = params.id;
        this.fetchBanda(id)
      });
    }

  }

  fetchBanda(id: string) {
    this.bandasService.getBanda(id).subscribe(banda => {
      this.banda = banda;
      // this.integrantes = banda.Integrantes.length;
      console.log(banda.Integrantes.length);
      console.log("datos obtenidos de la banda:" + banda);

      this.integrantesLista = banda.Integrantes;


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

    this.bandasService.enviarResenia(newResenia).subscribe(respuesta => {
      console.log("enviarResenia: " + respuesta)
      if (respuesta == true) {
        console.log("entro al true")
        this.hideMsgError = false;
        this.hideMsgSuccess = true;
      } else {
        this.hideMsgError = true;
        this.hideMsgSuccess = false;
      }
    })
  }

  radioChange(event: MatRadioChange, data: number) {
    this.voto = data;
  }

}
