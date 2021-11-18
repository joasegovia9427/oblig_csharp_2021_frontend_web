import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Usuario } from 'src/app/core/models/usuario.model';
import { UsuariosService } from 'src/app/core/services/usuarios/usuarios.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario;
  userField: FormControl;


  constructor(
    private usuarioService: UsuariosService
  ) {
    this.userField = new FormControl();
    this.userField.valueChanges.subscribe(value => { console.log(value) })
  }


  ngOnInit(): void {
  }

  // ngOnInit() {
  //   this.fetchProducts();
  // }

  // clickProduct(id: number) {
  //   console.log('product');
  //   console.log(id);
  // }

  // fetchProducts() {
  //   this.productsService.getAllProducts()
  //   .subscribe(products => {
  //     this.products = products;
  //   });
  // }

}
