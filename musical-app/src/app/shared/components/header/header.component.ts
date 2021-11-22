import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMostrarBotones = false;
  isMostrarBotonesWhenHasSession = false;
  nombreUsuario = "";

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
    if (window.sessionStorage["userName"] == undefined) {
      // window.sessionStorage["userName"] = "";
      sessionStorage.setItem("userName", "");
      sessionStorage.setItem("reloadF5", "");
    }


    console.log("header sess userName: " + window.sessionStorage["userName"]);
    const sessionUserName = window.sessionStorage["userName"];
    if (sessionUserName.length < 1) {
      // this.route.navigate(['/usuario/login']);
      this.isMostrarBotones = false;
      this.isMostrarBotonesWhenHasSession = true;
      this.nombreUsuario = "";
    }
    else {
      this.isMostrarBotones = true;
      this.isMostrarBotonesWhenHasSession = false;
      this.nombreUsuario = window.sessionStorage["userName"];
      if (this.nombreUsuario.length > 8) {
        (<HTMLInputElement>document.getElementById("botonUserName")).textContent = this.nombreUsuario.slice(0, 8) + "...";
      } else {
        (<HTMLInputElement>document.getElementById("botonUserName")).textContent = this.nombreUsuario;
      }

    }
  }

  cerrarSesion() {
    console.log("Cerrando sesion");
    window.sessionStorage["userName"] = "";
    window.location.href = window.location.href;
  }

}
