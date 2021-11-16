import { Component, OnInit, DoCheck } from '@angular/core';

import { Album } from 'src/app/core/models/album.model';
import { AlbumesService } from 'src/app/core/services/albumes/albumes.service';


@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.scss']
})
export class AlbumesComponent implements DoCheck, OnInit {

  albumes: Album[] = [];
  filtro_nombre: string;

  constructor(
    private albumesService: AlbumesService
  ) {
    this.filtro_nombre = "";
  }

  ngOnInit(): void {
    this.fetchAlbumes();
  }

  ngDoCheck() {
    this.filtro_nombre = (<HTMLInputElement>document.getElementById("filtroCards")).value;
  }


  outPut_AlbumVerDetalle(id: string) {
    console.log('en file albumes.component.ts, lo que capture desde lo profundo ' + id)
  }

  fetchAlbumes() {
    this.albumesService.getAllAlbumes()
      .subscribe(albumes => {
        this.albumes = albumes;
        console.log(this.albumes)
      })
  }

}
