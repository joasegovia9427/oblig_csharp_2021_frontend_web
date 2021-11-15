import { Component, OnInit } from '@angular/core';

import { Album } from 'src/app/core/models/album.model';
import { AlbumesService } from 'src/app/core/services/albumes/albumes.service';


@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.scss']
})
export class AlbumesComponent implements OnInit {

  albumes: Album[] = [];

  constructor(
    private albumesService: AlbumesService
  ) {
  }

  ngOnInit(): void {
    this.fetchAlbumes();
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
