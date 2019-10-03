import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Config from '../assets/app-config.json';
import { Album } from './album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private albumBaseUrl = `${Config.apiBaseUrl}/album`;

  constructor(private httpClient: HttpClient) { }

  getAlbum(id: number): Observable<Album> {
    return this.httpClient.get<Album>(`${this.albumBaseUrl}/read.php?id=${id}`);
  }

  getAlbums(details: boolean): Observable<Album[]> {
    return this.httpClient.get<Album[]>(`${this.albumBaseUrl}/readAll.php?details=${details}`);
  }

  createAlbum(album: Album): Observable<void> {
    return this.httpClient.post<void>(`${this.albumBaseUrl}/insert.php`, album);
  }

  updateAlbum(album: Album): Observable<void> {
    return this.httpClient.post<void>(`${this.albumBaseUrl}/update.php`, album);
  }

  deleteAlbum(id: number): Observable<void> {
    return this.httpClient.post<void>(`${this.albumBaseUrl}/delete.php`, id);
  }

}
