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

import { Banda } from '../../banda.module';

@Component({
    selector: 'app-banda',
    templateUrl: './banda.component.html',
    styleUrls: ['./banda.component.scss']
})

//export class BandaComponent implements OnChanges, OnInit {
export class BandaComponent implements OnInit, DoCheck, OnDestroy {

    @Input() banda: Banda;
    @Output() outPut_BandaVerDetalle: EventEmitter<any> = new EventEmitter();

    constructor() {
        console.log('1 constructor');

    }

    /* ngOnChanges(changes: SimpleChanges) {
        console.log('2 ngOnChanges');
        console.log('changes ' + changes);
    } */

    ngOnInit() {
        console.log('3 ngOnInit');
        // se llama a webservices aca

    }

    ngDoCheck() {
        console.log('4 ngDoCheck');
    }

    ngOnDestroy() {
        console.log('5 ngOnDestroy');
    }

    verDetalle() {
        console.log("Ver detalle del producto " + this.banda.id)
        this.outPut_BandaVerDetalle.emit(this.banda.id);
    }

}
