import { Component, OnInit } from '@angular/core';
import { banda } from '../banda';

@Component({
  selector: 'app-lista-banda',
  templateUrl: './lista-banda.component.html',
  styleUrls: ['./lista-banda.component.scss']
})
export class ListaBandaComponent implements OnInit {

  bandas = banda;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
