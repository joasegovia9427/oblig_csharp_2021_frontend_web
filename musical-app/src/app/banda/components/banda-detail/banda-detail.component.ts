import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { BandasService } from '../../../core/services/bandas/bandas.service';
import { Banda } from '../../../core/models/banda.model';

@Component({
  selector: 'app-banda-detail',
  templateUrl: './banda-detail.component.html',
  styleUrls: ['./banda-detail.component.scss']
})
export class BandaDetailComponent implements OnInit {

  banda: Banda;

  constructor(
    private route: ActivatedRoute,
    private bandasService: BandasService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {

      const id = params.id;

      this.banda = this.bandasService.getBanda(id);

      console.log(this.banda);
    });
  }

}
