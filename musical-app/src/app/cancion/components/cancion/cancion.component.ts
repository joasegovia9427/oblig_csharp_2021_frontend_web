import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy
} from '@angular/core';

import { Cancion } from '../../../core/models/cancion.model';
import { MaterialModule } from '../../../material/material.module';


@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.scss']
})

//export class BandaComponent implements OnChanges, OnInit {
export class CancionComponent implements OnInit, DoCheck, OnDestroy {

  @Input() cancion: Cancion;
  @Output() outPut_CancionesVerDetalle: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor() {
    // console.log('1 constructor');
  }


  /* ngOnChanges(changes: SimpleChanges) {
      console.log('2 ngOnChanges');
      console.log('changes ' + changes);
  } */

  ngOnInit() {
    // console.log('3 ngOnInit');
    // se llama a webservices aca

  }

  ngDoCheck() {
    // console.log('4 ngDoCheck');
  }

  ngOnDestroy() {
    // console.log('5 ngOnDestroy');
  }

  resenia() {
    console.log("en file banda.component.ts " + this.cancion.Id)
    this.outPut_CancionesVerDetalle.emit(this.cancion.Id);
  }

}