import { Component, OnInit, DoCheck } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Usuario } from 'src/app/core/models/usuario.model';
import { UsuariosService } from 'src/app/core/services/usuarios/usuarios.service';
import { Persona } from 'src/app/core/models/persona.model';
import { RouterModule, Routes, Router } from '@angular/router';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements DoCheck, OnInit {

  hide = true;
  usuario: Usuario;
  userField: FormControl;
  nombre: string;
  apellido: string;
  nombreUsuario: string;
  contrasenia: string;
  usuarioId: number;

  constructor(
    private usuarioService: UsuariosService,
    private route: Router
  ) {
    // this.userField = new FormControl();
    // this.userField.valueChanges.subscribe(value => { console.log(value) })
  }


  ngOnInit(): void {
    console.log("Usuario sess userName: " + window.sessionStorage["userName"]);
    const sessionUserName = window.sessionStorage["userName"];
    if (sessionUserName.length < 1) {
      this.route.navigate(['/usuario/login']);
    }
    else {
      const sessionUserName = window.sessionStorage["userName"]
      this.fetchUsuario(sessionUserName);
    }
  }

  ngDoCheck(): void {

  }

  fetchUsuario(sessionUserName: string) {
    this.usuarioService.obtenerIdUsuariosByNombreUsuario(sessionUserName).subscribe(id => {
      this.usuarioId = id;
      console.log("id obtenido del usuario:" + this.usuarioId);
      this.usuarioService.obtenerDatosUsuarioByIdUsuario(this.usuarioId).subscribe(usuario => {
        this.usuario = usuario;
        console.log("datos obtenidos del usuario:" + this.usuario);
        this.contrasenia = this.usuario.Contrasenia;
        // (<HTMLInputElement>document.getElementById("contrasenia")).value = this.usuario.Contrasenia;
      })
    })
  }
}