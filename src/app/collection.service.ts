import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Config from '../assets/app-config.json';
import { Collection } from './collection';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private collectionBaseUrl = `${Config.apiBaseUrl}/collection`;

  constructor(private httpClient: HttpClient) { }

  getCollection(id: number): Observable<Collection> {
    return this.httpClient.get<Collection>(`${this.collectionBaseUrl}/read.php?id=${id}`);
  }

  getCollections(): Observable<Collection[]> {
    return this.httpClient.get<Collection[]>(`${this.collectionBaseUrl}/readAll.php`);
  }

  createCollection(collection: Collection): Observable<void> {
    return this.httpClient.post<void>(`${this.collectionBaseUrl}/insert.php`, collection);
  }

  updateCollection(collection: Collection): Observable<void> {
    return this.httpClient.post<void>(`${this.collectionBaseUrl}/update.php`, collection);
  }

  deleteCollection(id: number): Observable<void> {
    return this.httpClient.post<void>(`${this.collectionBaseUrl}/delete.php`, id);
  }

}
