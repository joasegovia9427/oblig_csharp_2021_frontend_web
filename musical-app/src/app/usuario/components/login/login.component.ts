import { Component, OnInit, DoCheck } from '@angular/core';
import { Usuario } from 'src/app/core/models/usuario.model';
import { UsuariosService } from 'src/app/core/services/usuarios/usuarios.service';
import { Persona } from 'src/app/core/models/persona.model';
import { UsuarioRoutingModule } from '../../usuario-routing.module';
import { NavigationExtras } from '@angular/router';
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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements DoCheck, OnInit {

  userNameField: FormControl;
  userPassField: FormControl;

  isBotonIngresarMostrar = false;

  hideMsg = false;
  hide = true;
  nombreUsuario: string;
  contrasenia: string;

  matcher = new MyErrorStateMatcher();

  constructor(
    private usuariosService: UsuariosService,
    public router: UsuarioRoutingModule,
    private route: Router
    // public router: NavigationExtras
  ) {
    this.userNameField = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
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
    console.log("login sess userName:==>" + window.sessionStorage["userName"] + "<==");
    const sessionUserName = window.sessionStorage["userName"];
    if (sessionUserName.length > 0) {
      this.route.navigate(['/home']);
    }
  }

  ngDoCheck() {
    this.nombreUsuario = (<HTMLInputElement>document.getElementById("nombreUsuario")).value;
    this.contrasenia = (<HTMLInputElement>document.getElementById("contrasenia")).value;

    if (this.userNameField.valid &&
      this.userPassField.valid) {

      this.isBotonIngresarMostrar = true
    } else {
      this.isBotonIngresarMostrar = false
    }
  }


  iniciarSesionUsuario() {
    console.log("Nombre de Usuario:" + this.nombreUsuario);
    console.log("Pass de Usuario:" + this.contrasenia);
    this.usuariosService.iniciarSesionUsuario(this.nombreUsuario, this.contrasenia).subscribe(respuesta => {
      console.log(respuesta);

      if (respuesta == true) {
        window.sessionStorage["userName"] = this.nombreUsuario;
        window.sessionStorage["reloadF5"] = "true";
        this.route.navigate(['/home']);
        // window.location.href = window.location.href;
        this.hideMsg = false;
      }
      else {
        window.sessionStorage["userName"] = "";
        this.hideMsg = true;
      }
    })


  }

}