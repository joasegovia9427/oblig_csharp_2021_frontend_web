import { Component, OnInit, DoCheck } from '@angular/core';
import { Usuario } from 'src/app/core/models/usuario.model';
import { UsuariosService } from 'src/app/core/services/usuarios/usuarios.service';
import { Persona } from 'src/app/core/models/persona.model';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

import { FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements DoCheck, OnInit {

  firstNameField: FormControl;
  lastNameField: FormControl;
  userNameField: FormControl;
  userPassField: FormControl;

  isBotonCrearUserMostrar = false;
  mostrarMsgError = false;
  hide = true;
  nombre: string;
  apellido: string;
  nombreUsuario: string;
  contrasenia: string;

  matcher = new MyErrorStateMatcher();

  constructor(
    private usuariosService: UsuariosService,
    public dialog: MatDialog,
    private route: Router
  ) {
    this.firstNameField = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]);
    this.firstNameField.valueChanges.subscribe(value => { })

    this.lastNameField = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]);
    this.lastNameField.valueChanges.subscribe(value => { })

    this.userNameField = new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(20)
    ]);
    this.userNameField.valueChanges.subscribe(value => { })

    this.userPassField = new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20)
    ]);
    this.userPassField.valueChanges.subscribe(value => { })

  }

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


    if (this.firstNameField.valid &&
      this.lastNameField.valid &&
      this.userNameField.valid &&
      this.userPassField.valid) {

      this.isBotonCrearUserMostrar = true
    } else {
      this.isBotonCrearUserMostrar = false
    }
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