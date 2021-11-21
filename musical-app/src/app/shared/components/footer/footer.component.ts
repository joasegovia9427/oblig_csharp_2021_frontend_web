import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

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


    console.log("footer sess userName: " + window.sessionStorage["userName"]);
    const sessionUserName = window.sessionStorage["userName"];
    if (sessionUserName.length < 1) {
      this.isMostrarBotones = false;
      this.isMostrarBotonesWhenHasSession = true;
      this.nombreUsuario = "";
    }
    else {
      this.isMostrarBotones = true;
      this.isMostrarBotonesWhenHasSession = false;
      this.nombreUsuario = window.sessionStorage["userName"];
      (<HTMLInputElement>document.getElementById("footerUserName")).textContent = "Opciones de Usuario " + this.nombreUsuario;
    }
  }

  cerrarSesion() {
    console.log("Cerrando sesion");
    window.sessionStorage["userName"] = "";
    window.location.href = window.location.href;
  }

}
