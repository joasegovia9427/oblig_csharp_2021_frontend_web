import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Album } from '../../models/album.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumesService {

  url: string;

  constructor(
    private http: HttpClient
  ) { }

  getAllAlbumes() {
    this.url = environment.url_api + '/albumes/listado';
    return this.http.get<Album[]>(this.url);
  }

  getAlbum(id: string) {
    this.url = environment.url_api + '/albumes/obtener/' + id;
    return this.http.get<Album>(this.url);
  }

}
