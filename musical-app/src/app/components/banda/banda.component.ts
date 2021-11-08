import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Banda } from '../../banda.module';

@Component({
    selector: 'app-banda',
    templateUrl: './banda.component.html'

})

export class BandaComponent {

    @Input() banda: Banda;
    @Output() outPut_BandaVerDetalle: EventEmitter<any> = new EventEmitter();

    verDetalle() {
        console.log("Ver detalle del producto " + this.banda.id)
        this.outPut_BandaVerDetalle.emit(this.banda.id);
    }

}
