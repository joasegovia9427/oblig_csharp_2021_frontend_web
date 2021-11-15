import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';

import { Integrante } from 'src/app/core/models/integrante.model';

@Component({
  selector: 'app-integrante',
  templateUrl: './integrante.component.html',
  styleUrls: ['./integrante.component.scss']
})
export class IntegranteComponent implements OnInit {

  @Input() integrante: Integrante;
  @Output() outPut_IntegranteVerDetalle: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

}
