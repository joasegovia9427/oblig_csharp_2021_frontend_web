import { Component } from '@angular/core';
import { Banda } from './banda.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'musical-app';

  items = ['nicolas', 'julia', "pepe"];

  bandas: Banda[] = [
    {
      id: '1',
      nombre: 'banda',
      anoCreacion: 2020,
      anoSeparacion: 2020,
    },
    {
      id: '2',
      nombre: 'banda2',
      anoCreacion: 2020,
      anoSeparacion: 2020,
    },
  ];


  addItem(){
    this.items.push("nuevo item");

  }


    deleteItem(index: number){
      this.items.splice(index, 1);

    }

}
