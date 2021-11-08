import { Component } from '@angular/core';

import { Banda } from '../../banda.module';

@Component({
    selector: 'app-banda',
    templateUrl: './banda.component.html'

})

export class BandaComponent{

    banda: Banda = {
        id: '1',
        nombre: 'banda',
        anoCreacion: 2020,
        anoSeparacion: 2020,
    }


}