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

  getCollections(): Observable<Collection[]> {
    return this.httpClient.get<Collection[]>(`${this.collectionBaseUrl}/readAll.php`);
  }

  deleteCollection(id: number): Observable<void> {
    return this.httpClient.post<void>(`${this.collectionBaseUrl}/delete.php`, id);
  }

}
