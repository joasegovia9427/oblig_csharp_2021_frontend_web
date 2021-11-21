import { Component, OnInit, DoCheck } from '@angular/core';
import { Usuario } from 'src/app/core/models/usuario.model';
import { UsuariosService } from 'src/app/core/services/usuarios/usuarios.service';
import { Persona } from 'src/app/core/models/persona.model';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements DoCheck, OnInit {

  mostrarMsgError = false;
  hide = true;
  nombre: string;
  apellido: string;
  nombreUsuario: string;
  contrasenia: string;

  constructor(
    private usuariosService: UsuariosService,
    public dialog: MatDialog,
    private route: Router
  ) { }

  ngOnInit(): void {
    console.log("sess userName: " + window.sessionStorage["userName"]);
    const sessionUserName = window.sessionStorage["userName"];
    if (sessionUserName.length > 0) {
      this.route.navigate(['/home']);
    }
  }

  ngDoCheck() {
    this.nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    this.apellido = (<HTMLInputElement>document.getElementById("apellido")).value;
    this.nombreUsuario = (<HTMLInputElement>document.getElementById("nombreUsuario")).value;
    this.contrasenia = (<HTMLInputElement>document.getElementById("contrasenia")).value;
  }


  crearUsuario() {
    const newPersona: Persona = {
      Id: 0,
      Nombre: this.nombre,
      Apellido: this.apellido,
    }
    const newUsuario: Usuario = {
      Id: 0,
      NombreUsuario: this.nombreUsuario,
      Contrasenia: this.contrasenia,
      Persona: newPersona,
    }
    console.log(newUsuario);
    this.usuariosService.crearUsuario(newUsuario).subscribe(respuesta => {
      console.log(respuesta)

      if (respuesta == true) {
        this.mostrarMsgError = false;
        this.dialog.open(RegistroDialog);
      }
      else {
        this.mostrarMsgError = true;
      }

    })

  }

}


@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class RegistroDialog {

}