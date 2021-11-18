import { Component, OnInit, DoCheck } from '@angular/core';
import { Usuario } from 'src/app/core/models/usuario.model';
import { UsuariosService } from 'src/app/core/services/usuarios/usuarios.service';
import { Persona } from 'src/app/core/models/persona.model';
import { UsuarioRoutingModule } from '../../usuario-routing.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements DoCheck, OnInit {


  hide = true;
  nombreUsuario: string;
  contrasenia: string;

  constructor(
    private usuariosService: UsuariosService,
    public router: UsuarioRoutingModule
  ) { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.nombreUsuario = (<HTMLInputElement>document.getElementById("nombreUsuario")).value;
    this.contrasenia = (<HTMLInputElement>document.getElementById("contrasenia")).value;
  }


  iniciarSesionUsuario() {
    console.log("Nombre de Usuario:" + this.nombreUsuario);
    console.log("Pass de Usuario:" + this.contrasenia);
    this.usuariosService.iniciarSesionUsuario(this.nombreUsuario, this.contrasenia).subscribe(respuesta => { console.log(respuesta) })
    // this.router.navigate(['your-route']);
  }

}
