import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { AlbumesService } from 'src/app/core/services/albumes/albumes.service';
import { Album } from 'src/app/core/models/album.model';
import { Cancione } from 'src/app/core/models/cancione.model';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit {

  album: Album;
  canciones: Cancione;

  constructor(
    private route: ActivatedRoute,
    private albumesService: AlbumesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchAlbum(id)
    });
  }

  fetchAlbum(id: string) {
    this.albumesService.getAlbum(id).subscribe(album => {
      this.album = album;
      console.log("datos obtenidos de la album:" + album);
    })

  }




}
