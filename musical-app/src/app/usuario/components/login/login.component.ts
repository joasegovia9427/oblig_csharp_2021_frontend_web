import { Component, OnInit, DoCheck } from '@angular/core';
import { Usuario } from 'src/app/core/models/usuario.model';
import { UsuariosService } from 'src/app/core/services/usuarios/usuarios.service';
import { Persona } from 'src/app/core/models/persona.model';
import { UsuarioRoutingModule } from '../../usuario-routing.module';
import { NavigationExtras } from '@angular/router';
import { RouterModule, Routes, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements DoCheck, OnInit {

  hideMsg = false;
  hide = true;
  nombreUsuario: string;
  contrasenia: string;

  constructor(
    private usuariosService: UsuariosService,
    public router: UsuarioRoutingModule,
    private route: Router
    // public router: NavigationExtras
  ) { }

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